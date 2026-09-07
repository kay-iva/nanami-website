import type { PageServerLoad } from './$types';
import { getImageGallery } from '$lib/server/cloudinary';

export const load: PageServerLoad = async () => {
	const galleryImages = await getImageGallery('nanami-site/galleries/concerts').catch((error) => {
		console.error('Could not load concerts gallery:', error);
		return [];
	});

	return { galleryImages };
};
