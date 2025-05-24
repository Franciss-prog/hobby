import { writable } from 'svelte/store';
export const preferedDarkUser = writable(false);
export const dynamicIconSize = writable(40);
export const capitalize = (str: string) => {
	if (!str) return '';
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const trimToFiveSentences = (text: string) => {
	if (!text) return;
	const sentences = text.split('.').filter(Boolean);

	return sentences.slice(0, 5).join('.') + (sentences.length > 5 ? '...' : '.');
};
