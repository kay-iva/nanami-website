import type { PageServerLoad } from './$types';
import { getHeroVideo, getImageGallery, getSiteImage } from '$lib/server/cloudinary';

export const load: PageServerLoad = async () => {
	const [heroVideo, aboutImage, teachingImage, galleryImages] = await Promise.all([
		getHeroVideo('site-home-hero').catch((error) => {
			console.error('Could not load homepage hero:', error);
			return null;
		}),

		getSiteImage('site-home-about').catch((error) => {
			console.error('Could not load homepage about image:', error);
			return null;
		}),

		getSiteImage('site-home-teaching').catch((error) => {
			console.error('Could not load homepage teaching image:', error);
			return null;
		}),

		getImageGallery('nanami-site/galleries/home').catch((error) => {
			console.error('Could not load homepage gallery:', error);
			return [];
		})
	]);

	return {
		heroVideo,
		aboutImage,
		teachingImage,
		galleryImages
	};
};
