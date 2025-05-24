import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params }) => {
	const { category, item } = params;

	return {
		category,
		item 
	};
};
