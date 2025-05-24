import { fetchCategoryCharacters, fetchCategoryItem } from '$lib/utils/fetchData';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { category, id } = params;
	return {
		data: await fetchCategoryItem({ category, id })
	};
};
