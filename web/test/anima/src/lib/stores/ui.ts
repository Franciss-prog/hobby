import { writable } from 'svelte/store';
export const preferedDarkUser = writable(false);
export const dynamicIconSize = writable(40);
export const loading = writable(false);
export const attempt = writable(0);

export const capitalize = (str: string) => {
	if (!str) return '';
	return str.charAt(0).toUpperCase() + str.slice(1);
};
