import type { PageServerLoad } from './$types';
import { getImageGallery, getSiteImage } from '$lib/server/cloudinary';

export const load: PageServerLoad = async () => {
	const [heroImage, galleryImages] = await Promise.all([
		getSiteImage('site-concerts-hero').catch((error) => {
			console.error('Could not load concerts hero:', error);
			return null;
		}),

		getImageGallery('nanami-site/galleries/concerts').catch((error) => {
			console.error('Could not load concerts gallery:', error);
			return [];
		})
	]);

	return {
		heroImage,
		galleryImages
	};
};
