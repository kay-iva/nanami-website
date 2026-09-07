import type { PageServerLoad } from './$types';
import { getHeroVideo, getImageGallery } from '$lib/server/cloudinary';

export const load: PageServerLoad = async () => {
	const [heroVideo, galleryImages] = await Promise.all([
		getHeroVideo('site-home-hero').catch((error) => {
			console.error('Could not load homepage hero:', error);
			return null;
		}),
		getImageGallery('nanami-site/galleries/home').catch((error) => {
			console.error('Could not load homepage gallery:', error);
			return [];
		})
	]);

	return { heroVideo, galleryImages };
};
