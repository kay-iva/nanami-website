import { env } from '$env/dynamic/private';
import type { GalleryImage, HeroVideo, SiteImage } from '$lib/types';

type ResourceType = 'image' | 'video';

interface CloudinaryResource {
	public_id: string;
	format: string;
	resource_type: ResourceType;
	width?: number;
	height?: number;
	asset_folder?: string;
	display_name?: string;
	context?: {
		custom?: {
			alt?: string;
		};
	};
}

interface CloudinaryResponse {
	resources: CloudinaryResource[];
	next_cursor?: string;
}

const RESPONSIVE_WIDTHS = [320, 480, 640, 768, 960, 1200, 1440, 1920];
const cache = new Map<string, { expires: number; value: unknown }>();
const CACHE_TTL = 5 * 60 * 1000;

function config() {
	const cloudName = env.CLOUDINARY_CLOUD_NAME;
	const apiKey = env.CLOUDINARY_API_KEY;
	const apiSecret = env.CLOUDINARY_API_SECRET;

	if (!cloudName || !apiKey || !apiSecret) {
		throw new Error('Missing Cloudinary env vars.');
	}

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

async function cached<T>(key: string, loader: () => Promise<T>): Promise<T> {
	const existing = cache.get(key);

	if (existing && existing.expires > Date.now()) {
		return existing.value as T;
	}

	const value = await loader();

	cache.set(key, {
		expires: Date.now() + CACHE_TTL,
		value
	});

	return value;
}

function alt(asset: CloudinaryResource, fallback: string) {
	return asset.context?.custom?.alt ?? asset.display_name ?? fallback;
}

function imageUrl(publicId: string, width: number) {
	return deliveryUrl(publicId, 'image', `c_limit,w_${width}/f_auto/q_auto`);
}

function toSiteImage(asset: CloudinaryResource): SiteImage {
	const width = asset.width ?? 1;
	const height = asset.height ?? 1;

	const availableWidths = RESPONSIVE_WIDTHS.filter((candidate) => candidate <= width);

	if (!availableWidths.includes(width) && width <= 1920) {
		availableWidths.push(width);
	}

	if (availableWidths.length === 0) {
		availableWidths.push(width);
	}

	return {
		src: imageUrl(asset.public_id, Math.min(width, 1200)),
		srcset: availableWidths
			.map((candidate) => `${imageUrl(asset.public_id, candidate)} ${candidate}w`)
			.join(', '),
		full: imageUrl(asset.public_id, Math.min(width, 2000)),
		alt: alt(asset, 'Impression'),
		width,
		height
	};
}

async function getAssetByTag(tag: string, type: ResourceType): Promise<CloudinaryResource | null> {
	return cached(`tag:${type}:${tag}`, async () => {
		const { cloudName } = config();

		const data = await request(
			`https://api.cloudinary.com/v1_1/${cloudName}/resources/${type}/tags/${encodeURIComponent(tag)}?max_results=1&context=true`
		);

		return data.resources[0] ?? null;
	});
}

async function getAssetsByFolder(folder: string): Promise<CloudinaryResource[]> {
	return cached(`folder:${folder}`, async () => {
		const { cloudName } = config();

		const params = new URLSearchParams({
			asset_folder: folder,
			max_results: '500',
			context: 'true'
		});

		const data = await request(
			`https://api.cloudinary.com/v1_1/${cloudName}/resources/by_asset_folder?${params}`
		);

		return data.resources;
	});
}

export async function getSiteImage(tag: string): Promise<SiteImage | null> {
	const asset = await getAssetByTag(tag, 'image');

	return asset ? toSiteImage(asset) : null;
}

export async function getImageGallery(folder: string): Promise<GalleryImage[]> {
	const assets = await getAssetsByFolder(folder);

	return assets.map(toSiteImage);
}

export async function getHeroVideo(tag: string): Promise<HeroVideo | null> {
	const asset = await getAssetByTag(tag, 'video');

	if (!asset) return null;

	return {
		webm: deliveryUrl(asset.public_id, 'video', 'f_webm/q_auto', 'webm'),
		mp4: deliveryUrl(asset.public_id, 'video', 'f_mp4/q_auto', 'mp4'),
		poster: deliveryUrl(asset.public_id, 'video', 'so_0/c_limit,w_1920/f_auto/q_auto'),
		alt: alt(asset, 'Nanami Shiraki am Klavier')
	};
}
