import { getHeroVideo, getImageGallery, getSiteImage } from '$lib/server/cloudinary';

export async function load() {
	const [aboutHero, aboutGallery, heroVideo] = await Promise.all([
		getSiteImage('site-about-hero'),
		getImageGallery('nanami-site/galleries/about'),
		getHeroVideo('site-home-hero')
	]);

	return {
		aboutHero,
		aboutGallery,
		heroVideo
	};
}
