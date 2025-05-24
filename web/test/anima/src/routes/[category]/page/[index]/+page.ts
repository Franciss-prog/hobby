import type { PageLoad } from '../../$types';
import { fetchCategoryData } from '$lib';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const id = Number(params.index);

	if (!Number.isInteger(id)) {
		throw redirect(301, `/${params.category}/page/1`);
	}

	return {
		index: id,
        data: await fetchCategoryData({ category: params.category, page: id }),
	};
};
