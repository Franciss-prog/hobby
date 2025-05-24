

export const allowedCategories = (data: any) => {
    const allowedCategories = ['anime', 'manga', 'characters'] as const;
	type Category = (typeof allowedCategories)[number];

	return allowedCategories.includes(data.category as any)
		? (data.category as Category)
		: null;
}