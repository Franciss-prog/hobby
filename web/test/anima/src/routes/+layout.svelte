<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import '../app.css';
	let { children } = $props();
	import Navbar from '$lib/components/Navbar.svelte';
	import { preferedDarkUser, dynamicIconSize } from '$lib';

	onMount(() => {
		if (innerWidth <= 768) {
			dynamicIconSize.set(25);
		}
		if (innerWidth <= 640) {
			dynamicIconSize.set(20);
		}

		if (typeof window !== 'undefined') {
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			preferedDarkUser.set(mediaQuery.matches); // set initial

			// Listen to changes in system preference
			mediaQuery.addEventListener('change', (e) => {
				preferedDarkUser.set(e.matches);
			});
		}
	});
	
</script>

<main class={`${$preferedDarkUser ? 'bg-black text-white' : 'bg-white text-black'} h-auto`}>
	{#if $page.data.category || $page.params.slug}
		<section class=" px-20 py-10">
			<Navbar />
			{@render children()}
		</section>
	{:else}
		<section class="p-16">
			{@render children()}
		</section>
	{/if}
</main>
