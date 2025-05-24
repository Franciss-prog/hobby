<script lang="ts">
	import { page } from '$app/stores';
	import { dynamicIconSize } from '$lib/store/ui';
	import { X, Star } from '@lucide/svelte';

	type SpecificCharacter = {
		name: string;
		mal_id: number;
		images: {
			jpg: {
				image_url: string;
			};
		};
	};

	const characters = $page.data.data;
	$: characterRole = '';
	$: characterFavorite = 0;
	let selectedCharacter: SpecificCharacter | null = null; // Holds the selected character object
</script>

<section class="h-auto">
	<span class="text-4xl">All characters: {characters.length}</span>
	<div class="mb-10 grid grid-cols-4 gap-6">
		{#each characters as { character, role, favorites }}
			<div class="py-5">
				<button
					class="flex cursor-pointer flex-col gap-3"
					on:click={() => {
						selectedCharacter = character;
						characterRole = role;
						characterFavorite = favorites;
					}}
				>
					<img
						src={character.images?.jpg.image_url}
						alt={character.name}
						class="h-[400px] w-full object-cover"
					/>
					<span>{character.name}</span>
				</button>
			</div>
		{/each}
	</div>

	{#if selectedCharacter}
		<!-- Modal -->
		<div
			class="fixed inset-0 z-10 flex flex-col px-20 py-10 text-2xl backdrop-blur-md max-sm:text-lg"
		>
			<!-- Close Button -->
			<div class="mb-10 flex items-center justify-between">
				<a href={`/characters/${selectedCharacter.mal_id}`} class=" text-3xl"
					>About <span class="underline">{selectedCharacter.name}</span></a
				>

				<button class="cursor-pointer" on:click={() => (selectedCharacter = null)}>
					<X size={$dynamicIconSize} />
				</button>
			</div>

			<!-- Character Info -->
			<div
				class="mt-5 flex items-center justify-start space-y-5 text-center text-3xl max-md:space-y-4 max-sm:space-y-3"
			>
				<img
					src={selectedCharacter.images?.jpg?.image_url}
					alt={selectedCharacter.name}
					class="aspect-9/16  rounded-3xl"
				/>
				<div class="flex h-full flex-col items-start justify-start gap-5 px-5 py-2">
					<span class="font-michroma text-6xl">{selectedCharacter.name}</span>
					<span class="font-oswald text-5xl">{characterRole} Character</span>
					<span class="flex items-center gap-2 text-4xl"
						>Favorites: <span class="flex flex-row items-center gap-2"
							><Star color="gold" fill="gold" /> {characterFavorite}</span
						></span
					>
				</div>
			</div>
		</div>
	{/if}
</section>
