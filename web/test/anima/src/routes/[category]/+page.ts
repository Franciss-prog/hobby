import { fetchCategoryData } from '$lib';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ params }) => {
	
	throw redirect(301, `/${params.category}/page/1`)
};
