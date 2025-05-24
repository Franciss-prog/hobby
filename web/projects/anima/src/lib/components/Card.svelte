<script lang="ts">
	export let item: any;
	export let category: string | undefined;
	// Define allowed categories and a type from them
	const allowedCategories = ['anime', 'manga', 'characters'] as const;
	type Category = (typeof allowedCategories)[number];

	// Validate category
	const safeCategory: Category | null = allowedCategories.includes(category as any)
		? (category as Category)
		: null;
</script>

{#if safeCategory === 'anime' || safeCategory === 'manga'}
	<a
		class="flex flex-col gap-2 px-10 py-16 text-xl"
		href={`/explore/${safeCategory}/${item.mal_id}`}
	>
		<img
			src={item.images.jpg.image_url}
			alt={item.title}
			class="h-full w-full rounded-md object-cover"
		/>
		<h2 class="mt-2 font-semibold">{item.title.length > 20 ? item.title_english : item.title}</h2>
		<p class="text-base">Score: {item.score ?? 'N/A'}</p>
	</a>
{:else if safeCategory === 'characters'}
	<a class="p-5 text-xl" href={`explore/characters/${item.mal_id}`}>
		<img
			src={item.images.jpg.image_url}
			alt={item.name}
			class="h-96 w-full rounded-md object-cover"
		/>
		<h2 class=" mt-2 font-semibold">{item.name}</h2>
	</a>
{/if}
