import { fetchCategoryData } from '$lib/utils/fetchData';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	return {
		data: await fetchCategoryData({ category: params.category, page: params.index })
	};
};
