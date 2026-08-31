import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

interface CloudinaryResource {
	public_id: string;
	format: string;
	asset_folder?: string;
	display_name?: string;
}

interface CloudinaryResponse {
	resources: CloudinaryResource[];
}

export async function GET() {
	const cloudName = env.CLOUDINARY_CLOUD_NAME;
	const apiKey = env.CLOUDINARY_API_KEY;
	const apiSecret = env.CLOUDINARY_API_SECRET;

	if (!cloudName || !apiKey || !apiSecret) {
		return json({ error: 'Cloudinary environment variables are missing.' }, { status: 500 });
	}

	const auth = btoa(`${apiKey}:${apiSecret}`);

	const url =
		`https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload` +
		`?type=upload&max_results=100`;

	const response = await fetch(url, {
		headers: {
			Authorization: `Basic ${auth}`
		}
	});

	if (!response.ok) {
		const error = await response.text();
		console.error('Cloudinary error:', error);

		return json({ error: 'Could not load gallery images.' }, { status: 500 });
	}

	const data = (await response.json()) as CloudinaryResponse;

	const images = data.resources
		.filter((image) => image.asset_folder === 'concerts')
		.map((image) => ({
			src: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${image.public_id}.${image.format}`,
			alt: image.display_name ?? 'Konzertimpression'
		}));

	return json(images);
}
