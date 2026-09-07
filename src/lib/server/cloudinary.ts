import { env } from '$env/dynamic/private';
import type { GalleryImage, HeroVideo } from '$lib/types';

type ResourceType = 'image' | 'video';

interface CloudinaryResource {
	public_id: string;
	format: string;
	resource_type: ResourceType;
	asset_folder?: string;
	display_name?: string;
}

interface CloudinaryResponse {
	resources: CloudinaryResource[];
}

function config() {
	const cloudName = env.CLOUDINARY_CLOUD_NAME;
	const apiKey = env.CLOUDINARY_API_KEY;
	const apiSecret = env.CLOUDINARY_API_SECRET;

	if (!cloudName || !apiKey || !apiSecret) throw new Error('Missing Cloudinary env vars.');

	return { cloudName, apiKey, apiSecret };
}

function auth() {
	const { apiKey, apiSecret } = config();
	return `Basic ${btoa(`${apiKey}:${apiSecret}`)}`;
}

function deliveryUrl(publicId: string, type: ResourceType, transform: string, format?: string) {
	const { cloudName } = config();

	return `https://res.cloudinary.com/${cloudName}/${type}/upload/${transform}/${publicId}${format ? `.${format}` : ''}`;
}

async function request(url: string) {
	const response = await fetch(url, {
		headers: { Authorization: auth() }
	});

	if (!response.ok) {
		throw new Error(`Cloudinary ${response.status}: ${await response.text()}`);
	}

	return (await response.json()) as CloudinaryResponse;
}

async function resources(type: ResourceType) {
	const { cloudName } = config();

	return request(
		`https://api.cloudinary.com/v1_1/${cloudName}/resources/${type}/upload?type=upload&max_results=500`
	);
}

export async function getAssetByTag(tag: string, type: ResourceType) {
	const { cloudName } = config();

	const data = await request(
		`https://api.cloudinary.com/v1_1/${cloudName}/resources/${type}/tags/${encodeURIComponent(tag)}?max_results=1`
	);

	return data.resources[0];
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
			alt: asset.display_name ?? 'Impression'
		}));
}
