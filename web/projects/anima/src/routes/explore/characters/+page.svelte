<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	export let data;
	const { category } = data;
</script>

<section class="grid min-h-screen w-full grid-cols-2 gap-4 p-4 md:grid-cols-4">
	{#each data.data as item}
		<Card {item} {category} />
	{/each}
</section>
