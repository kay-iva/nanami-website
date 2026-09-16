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

export interface HeroVideo {
	webm: string;
	mp4: string;
	poster: string;
	alt: string;
}

export interface MusicCourse {
	id: string;
	title: string;
	age: string;
	description: string;
	price: number;
	duration: number;
	dates: string[];
	time: string;
	location: string;
	capacity?: number;
	calEventTypeId?: number;
}
