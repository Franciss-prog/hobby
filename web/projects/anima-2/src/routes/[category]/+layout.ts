import type { LayoutLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getCategoryFromPath, categoryRoutes } from '$lib/store/route';
export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;
	const category = getCategoryFromPath(pathname);

	for (const route of categoryRoutes) {
		if (pathname === `/${route}` || pathname === `/${route}/page`) {
			throw redirect(301, `/${route}/page/1`);
		}
	}

	if (!category && pathname !== '/') {
		throw redirect(301, '/');
	}
	return;
};
