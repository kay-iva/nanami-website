import type { PageServerLoad } from './$types';
import type { GalleryImage } from '$lib/types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/gallery');

	if (!response.ok) {
		console.error('Could not load Cloudinary gallery.');

		return {
			galleryImages: [] satisfies GalleryImage[]
		};
	}

	const galleryImages = (await response.json()) as GalleryImage[];

	return {
		galleryImages
	};
};
