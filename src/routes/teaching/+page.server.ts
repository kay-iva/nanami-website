import type { PageServerLoad } from './$types';
import {
	getImageGallery,
	getSiteImage
} from '$lib/server/cloudinary';

export const load: PageServerLoad = async () => {
	const [heroImage, studioImage, galleryImages] = await Promise.all([
		getSiteImage('site-teaching-hero').catch((error) => {
			console.error('Could not load teaching hero:', error);
			return null;
		}),

		getSiteImage('site-teaching-studio').catch((error) => {
			console.error('Could not load teaching studio:', error);
			return null;
		}),

		getImageGallery('nanami-site/galleries/teaching').catch((error) => {
			console.error('Could not load teaching gallery:', error);
			return [];
		})
	]);

	return {
		heroImage,
		studioImage,
		galleryImages
	};
};