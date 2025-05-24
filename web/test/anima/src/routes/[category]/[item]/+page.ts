import { fetchCategoryCharacters, fetchCategoryItem } from '$lib/utils/fetchData';
import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ params, data }) => {
	const { category, item } = params;
	console.log(data);

	return {
		data: await fetchCategoryItem({ category, id: item }),
		characters: await fetchCategoryCharacters({ category, id: item })
	};
};
