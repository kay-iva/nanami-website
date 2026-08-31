import type { GalleryImage } from '$lib/types';

const cloudName = 'nifwzyb8';

function cloudinaryImage(publicId: string) {
	return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto/q_auto/${publicId}`;
}

export const concertGallery: GalleryImage[] = [
	{
		src: cloudinaryImage('teaching.jpg'),
		alt: 'Impression eines Klavierkonzerts'
	}
];
