import { env } from '$env/dynamic/private';
import type { GalleryImage, HeroVideo } from '$lib/types';

type ResourceType = 'image' | 'video';

interface CloudinaryResource {
	public_id: string;
	format: string;
	resource_type: ResourceType;
	asset_folder?: string;
	display_name?: string;
	tags?: string[];
}

interface CloudinaryResponse {
	resources: CloudinaryResource[];
	next_cursor?: string;
}

function config() {
	const cloudName = env.CLOUDINARY_CLOUD_NAME;
	const apiKey = env.CLOUDINARY_API_KEY;
	const apiSecret = env.CLOUDINARY_API_SECRET;

	if (!cloudName || !apiKey || !apiSecret) {
		throw new Error('Cloudinary environment variables are missing.');
	}

	return { cloudName, apiKey, apiSecret };
}

function auth() {
	const { apiKey, apiSecret } = config();
	return `Basic ${btoa(`${apiKey}:${apiSecret}`)}`;
}

function deliveryUrl(
	publicId: string,
	resourceType: ResourceType,
	transformation: string,
	format?: string
) {
	const { cloudName } = config();

	return `https://res.cloudinary.com/${cloudName}/${resourceType}/upload/${transformation}/${publicId}${format ? `.${format}` : ''}`;
}

async function resources(resourceType: ResourceType) {
	const { cloudName } = config();

	const response = await fetch(
		`https://api.cloudinary.com/v1_1/${cloudName}/resources/${resourceType}/upload?type=upload&max_results=500`,
		{
			headers: {
				Authorization: auth()
			}
		}
	);

	if (!response.ok) {
		throw new Error(`Cloudinary request failed: ${response.status} ${await response.text()}`);
	}

	return (await response.json()) as CloudinaryResponse;
}

export async function getAssetByTag(tag: string, resourceType: ResourceType) {
	const data = await resources(resourceType);

	return data.resources.find((resource) => resource.tags?.includes(tag));
}

export async function getHeroVideo(tag: string): Promise<HeroVideo | null> {
	const asset = await getAssetByTag(tag, 'video');

	if (!asset) return null;

	return {
		webm: deliveryUrl(asset.public_id, 'video', 'f_webm,q_auto', 'webm'),
		mp4: deliveryUrl(asset.public_id, 'video', 'f_mp4,q_auto', 'mp4'),
		poster: deliveryUrl(asset.public_id, 'video', 'so_0,f_jpg,q_auto', 'jpg'),
		alt: asset.display_name ?? 'Nanami Shiraki am Klavier'
	};
}

export async function getImageGallery(folder: string): Promise<GalleryImage[]> {
	const data = await resources('image');

	return data.resources
		.filter((asset) => asset.asset_folder === folder)
		.map((asset) => ({
			src: deliveryUrl(asset.public_id, 'image', 'f_auto,q_auto'),
			alt: asset.display_name ?? 'Konzertimpression'
		}));
}
