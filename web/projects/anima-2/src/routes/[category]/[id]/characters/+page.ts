import { fetchCategoryCharacters } from '$lib/utils/fetchData';
import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ params }) => {
	const { id, category } = params;
	return {
		data: await fetchCategoryCharacters({ category, id })
	};
};
