export const categoryRoutes: string[] = ['anime', 'manga', 'characters'];
// function to validate the path
export const isCategoryValid = (url: string) => {
	return categoryRoutes.some((route) => url.includes(route));
};

export const getCategoryFromPath = (url: string) => {
	const segments = url.split('/').filter(Boolean);     
	return segments[0] || null; 
};
