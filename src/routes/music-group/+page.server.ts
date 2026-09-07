import type { PageServerLoad } from './$types';
import { getImageGallery } from '$lib/server/cloudinary';

export const load: PageServerLoad = async () => {
	const galleryImages = await getImageGallery('nanami-site/galleries/music-group').catch(
		(error) => {
			console.error('Could not load music group gallery:', error);
			return [];
		}
	);

	return { galleryImages };
};
