import axios from 'axios';

import { limitFetch } from './rateLimiter';
export interface fetchProps {
	category: string | null;
	id?: string;
	page?: string;
}

export const fetchCategoryData = async ({ category, page }: fetchProps) => {
	return await limitFetch(async () => {
		try {
			const res = await axios.get(`https://api.jikan.moe/v4/${category}?page=${page}`);
			return res.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log(error);
			}
		}
	});
};

export const fetchCategoryItem = async ({ category, id }: fetchProps) => {
	return await limitFetch(async () => {
		try {
			const res = await axios.get(`https://api.jikan.moe/v4/${category}/${id}`);
			return res.data.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log(error);
			}
		}
	});
};
export const fetchCategoryCharacters = async ({ category, id }: fetchProps) => {
	return await limitFetch(async () => {
		try {
			const res = await axios.get(`https://api.jikan.moe/v4/${category}/${id}/characters?limit=12`);
			return res.data.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log(error);
			}
		}
	});
};
