import type { PageServerLoad } from './$types';
import {
    getImageGallery,
    getSiteImage
} from '$lib/server/cloudinary';

export const load: PageServerLoad = async () => {
    const [heroImage, galleryImages] = await Promise.all([
        getSiteImage('site-about-hero').catch((error) => {
            console.error('Could not load about hero:', error);
            return null;
        }),

        getImageGallery('nanami-site/galleries/about').catch((error) => {
            console.error('Could not load about gallery:', error);
            return [];
        })
    ]);

    return {
        heroImage,
        galleryImages
    };
};