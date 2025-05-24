<script lang="ts">
	import { preferedDarkUser, capitalize, dynamicIconSize } from '$lib/store/ui';
	import { Star, X, Undo2 } from '@lucide/svelte';
	// Props
	export let category: string;
	export let images: any;
	export let name: string;
	export let title: string;
	export let japaneseTitle: string;
	export let score: number;
	export let favorites: number;
	export let genres: { name: string }[] = [];
	export let about;
	export let id;
	export let synopsis;
	let showAbout: boolean = false;
	$: capitalized = capitalize(category);
</script>

{#if category === 'anime' || category === 'manga'}
	<section
		class="font-oswald relative h-screen w-full rounded-[44px] bg-cover bg-center"
		style={`background-image: url(${images.jpg.large_image_url})`}
	>
		<div class="absolute inset-0 z-0 rounded-[44px] bg-black opacity-50"></div>
		<div class="font-oswald flex h-full flex-col justify-between">
			<div class="flex h-full items-start justify-between">
				<div class="z-0 flex flex-col items-start gap-5 px-8 py-5 text-4xl text-white">
					<span class="font-michroma text-6xl">{title}</span>
					<div class="flex flex-row items-center gap-5">
						{#each genres as { name }}
							<span>{name}</span>
						{/each}
					</div>
				</div>
				<div
					class={`z-0 flex h-[200px] w-md flex-row items-center justify-start gap-3 rounded-bl-[44px] px-8 py-5 text-5xl ${$preferedDarkUser ? 'bg-black text-white' : 'bg-white text-black'}`}
				>
					<Star color="gold" fill="gold" />
					<span class="font-bold">{score}</span>
				</div>
			</div>

			<header class="z-0 flex h-36 items-center justify-center px-8">
				<nav
					class="font-poppins z-0 flex h-20 w-full items-center justify-between rounded-xl px-8 text-2xl text-white"
				>
					<button
						on:click={() => window.history.go(-1)}
						class={`rounded-full p-2 text-2xl font-bold ${$preferedDarkUser ? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer`}
						><Undo2 size={$dynamicIconSize}/></button
					>
					<div class="flex items-center gap-5">
						<button class="cursor-pointer hover:underline" on:click={() => (showAbout = !showAbout)}
							>Plot</button
						>

						<a href={`/${category}/${id}/characters`}>Characters</a>
					</div>
					<a href={`/${category}/page/1`} class="hover:underline">Alternative {capitalized}</a>
				</nav>
			</header>
		</div>
	</section>
{:else}
	<section
		class="font-oswald relative h-screen w-full rounded-[44px] bg-cover bg-center"
		style={`background-image: url(${images.jpg.image_url})`}
	>
		<div class="absolute inset-0 z-0 rounded-[44px] bg-black opacity-50"></div>
		<div class="font-oswald flex h-full flex-col justify-between">
			<div class="flex h-full items-start justify-between">
				<div class="z-0 flex flex-col items-start gap-5 px-8 py-5 text-4xl">
					<span class="font-michroma text-6xl">{name}</span>
					<span class="font-michroma text-6xl">{japaneseTitle}</span>
				</div>
				<div
					class={`z-0 flex h-[200px] w-md flex-row items-center justify-start gap-3 rounded-bl-[44px] px-8 py-5 text-5xl ${$preferedDarkUser ? 'bg-black text-white' : 'bg-white text-black'}`}
				>
					<Star color="gold" fill="gold" size={$dynamicIconSize} />
					{favorites}
				</div>
			</div>

			<header class="z-0 flex h-36 items-center justify-center px-8">
				<nav
					class="font-poppins z-0 flex h-20 w-full items-center justify-between rounded-xl px-8 text-2xl"
				>
					<a href={`/${category}/`} class="rounded-full bg-white p-2 text-2xl font-bold text-black"
						><Undo2 /></a
					>
					<div class="flex items-center gap-5">
						<button on:click={() => (showAbout = !showAbout)} class="cursor-pointer hover:underline"
							>About {name}</button
						>
					</div>
					<a href={`/${category}/page/1`} class="hover:underline">Explore {capitalized}</a>
				</nav>
			</header>
		</div>
	</section>
{/if}

{#if showAbout}
	<div
		class="fixed inset-0 z-10 flex flex-col px-20 py-10 text-2xl backdrop-blur-md max-sm:text-lg"
	>
		<div class="mb-10 flex items-center justify-between">
			<!-- Close Button -->
			<span class="font-michroma text-6xl">{category === 'characters' ? name : title}</span>

			<button class="cursor-pointer" on:click={() => (showAbout = false)}>
				<X size={$dynamicIconSize} />
			</button>
		</div>
		<div
			class="mt-5 flex h-screen flex-col items-start justify-start space-y-5 text-center text-3xl max-md:space-y-4 max-sm:space-y-3"
		>
			<span class="text-start">{category === 'characters' ? about : synopsis}</span>
		</div>
	</div>
{/if}
