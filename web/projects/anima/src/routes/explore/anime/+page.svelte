<script lang="ts">
	import type { LayoutProps } from '../$types';
	let { data }: LayoutProps = $props();
	import Card from '$lib/components/Card.svelte';
	const category = data.category;
		console.log(data.data);
		
</script>

<section class="grid min-h-screen w-full grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-1">
	{#each data.data as item}
		<Card {item} {category} />
	{/each}
</section>
