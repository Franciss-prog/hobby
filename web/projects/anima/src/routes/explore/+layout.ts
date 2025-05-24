import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url, fetch }) => {
	const category = ['anime', 'manga', 'characters'].find((c) => url.pathname.includes(c));
	if (!category) {
		console.warn('No valid category in path.');
		return { data: [] };
	}

	// ✅ Wait 1200ms before fetching
	await new Promise((resolve) => setTimeout(resolve, 2500));

	try {
		const response = await fetch(`https://api.jikan.moe/v4/top/${category}`);
		const json = await response.json();
		return { data: json.data, category };
	} catch (error) {
		console.error('Fetch error:', error);
		return { data: [], category };
	}
};
