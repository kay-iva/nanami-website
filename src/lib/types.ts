export interface Concert {
	title: string;
	date: string;
	time?: string;
	location?: string;
	description?: string;
	image?: string;
	ticketUrl?: string;
}

export interface GalleryImage {
	src: string;
	alt: string;
}