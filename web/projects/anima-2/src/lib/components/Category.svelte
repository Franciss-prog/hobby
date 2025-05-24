<script lang="ts">
	import { dynamicIconSize, preferedDarkUser } from '$lib/store/ui';
	import { ChevronRight, ChevronLeft } from '@lucide/svelte';
	export let category;
	export let data;
	export let index;
	export let pagination;
	$: totalPages = pagination;
	$: currentIndex = parseInt(index);
	$: nextPage = currentIndex + 1;
	$: prevPage = currentIndex !== 1 ? currentIndex - 1 : currentIndex;
	$: start = Math.max(1, index - 2);
	$: end = Math.min(totalPages, start + 4);
	start = Math.max(1, end - 4);
	$: links = Array.from({ length: end - start + 1 }, (_, i) => start + i);
</script>

<section class="h-auto">
	<div class="mb-10 grid grid-cols-5 gap-4">
		{#if category === 'anime' || category === 'manga'}
			{#each data as { title, images, mal_id }}
				<div class="p-2">
					<a href={`/${category}/${mal_id}`} class="flex flex-col gap-3">
						<img src={images?.jpg.image_url} alt={title} class="h-[400px] w-full object-cover" />
						<span>{title}</span>
					</a>
				</div>
			{/each}
		{:else}
			{#each data as { images, mal_id, name }}
				<div class="p-2">
					<a href={`/${category}/${mal_id}`}>
						<img src={images.jpg.image_url} alt={name} class="h-[400px] w-full object-cover" />
						<span>{name}</span>
					</a>
				</div>
			{/each}
		{/if}
	</div>
	<div class="mt-10 flex items-center justify-center gap-5">
		<a href={`/${category}/page/${prevPage}`}><ChevronLeft size={$dynamicIconSize} /></a>
		<div class="flex items-center gap-3">
			{#each links as i}
				<a
					href={`/${category}/page/${i}`}
					class={`rounded px-3 py-1 ${
						i === currentIndex
							? $preferedDarkUser
								? 'bg-white text-black'
								: 'bg-black text-white'
							: $preferedDarkUser
								? 'text-white hover:bg-white hover:text-black'
								: 'text-black hover:bg-black hover:text-white'
					}`}
				>
					{i}
				</a>
			{/each}
		</div>
		<a href={`/${category}/page/${nextPage}`}><ChevronRight size={$dynamicIconSize} /></a>
	</div>
</section>
