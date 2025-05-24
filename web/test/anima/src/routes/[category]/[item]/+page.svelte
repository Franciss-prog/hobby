<script>
	import { preferedDarkUser } from '$lib';
	import { page } from '$app/stores';
	import { Star, Undo2, X } from 'lucide-svelte';
	import { capitalize } from '$lib/stores/ui';
	import { dynamicIconSize } from '$lib/stores/ui';

	// deconstruct reactive for better readability
	const data = $page.data.data;
	console.log(data);
	// anime and manga reactive derivatives
	$: images = data.images;
	$: synopsis = data.synopsis;
	$: score = data.score;
	$: genres = data.genres;
	// characters reactive derivatives
	$: capitalized = capitalize(category);
	$: name = data.name;
	$: about = data.about;
	$: japaneseTitle = data.name_kanji;
	$: englishTitle = data.title_english;
	$: category = $page.data.category;
	$: showCharacter = false;

	console.log($page.data.characters);
	
</script>

{#if category === 'anime' || category === 'manga'}
	<section
		class="font-oswald relative h-screen w-full rounded-[44px] bg-cover bg-center"
		style={`background-image: url(${images.jpg.large_image_url})`}
	>
		<!-- Black Overlay -->
		<div class="absolute inset-0 z-0 rounded-[44px] bg-black opacity-50"></div>

		<div class="font-oswald flex h-full flex-col justify-between">
			<div class="flex h-full items-start justify-between">
				<div class=" z-0 flex flex-col items-start gap-5 px-8 py-5 text-4xl text-white">
					<span class="font-michroma text-6xl">{englishTitle}</span>
					<div class="flex flex-row items-center gap-5">
						{#each genres as { name }}
							<span>{name}</span>
						{/each}
					</div>
				</div>
				<!-- card -->
				<div
					class={`z-0 flex h-[200px] w-md flex-row items-center justify-start gap-3 rounded-bl-[44px] px-8 py-5 text-5xl ${$preferedDarkUser ? 'bg-black text-white' : 'bg-white text-black'}`}
				>
					<Star color="gold" fill="gold" />
					<span class=" font-bold">{score}</span>
				</div>
			</div>
			<header class="z-0 flex h-36 items-center justify-center px-8">
				<nav
					class={`font-poppins z-0 flex h-20 w-full items-center justify-between rounded-xl px-8 text-2xl text-white`}
				>
					<a
						href={`/${category}`}
						class={`rounded-full p-2 text-2xl font-bold ${$preferedDarkUser ? 'bg-black text-white' : 'bg-white text-black'}`}
						><Undo2 /></a
					>
					<!-- navlinks -->
					<div class="flex items-center gap-5">
						<a href="/anime" class="hover:underline">Plot</a>
						<button class="cursor-pointer hover:underline" on:click={() => (showCharacter = true)}
							>Characters</button
						>
					</div>
					<a href={`/${category}`} class="hover:underline">Alternative {capitalized}</a>
				</nav>
			</header>
		</div>
	</section>
{:else}
	<section
		class="font-oswald relative h-screen w-full rounded-[44px] bg-cover bg-center"
		style={`background-image: url(${images.jpg.image_url})`}
	>
		<!-- Black Overlay -->
		<div class="absolute inset-0 z-0 rounded-[44px] bg-black opacity-50"></div>
		<div class="font-oswald flex h-full flex-col justify-between">
			<div class="flex h-full items-start justify-between">
				<div class=" z-0 flex flex-col items-start gap-5 px-8 py-5 text-4xl">
					<span class="font-michroma text-6xl">{name}</span>
				</div>

				<!-- card -->
				<div
					class={`z-0 flex h-[200px] w-md flex-row items-center justify-start gap-3 rounded-bl-[44px] px-8 py-5 text-5xl ${preferedDarkUser ? 'bg-black text-white' : 'bg-white text-black'}`}
				>
					{japaneseTitle}
				</div>
			</div>
			<header class="z-0 flex h-36 items-center justify-center px-8">
				<nav
					class={`font-poppins z-0 flex h-20 w-full items-center justify-between rounded-xl px-8 text-2xl `}
				>
					<a href={`/${category}`} class="rounded-full bg-white p-2 text-2xl font-bold text-black"
						><Undo2 /></a
					>
					<!-- navlinks -->
					<div class="flex items-center gap-5">
						<a href="/anime" class="hover:underline">About</a>
					</div>
					<a href={`/${category}`} class="hover:underline">Explore {capitalized}</a>
				</nav>
			</header>
		</div>
	</section>
{/if}

{#if showCharacter}
	<div
		class="fixed inset-0 z-10 flex flex-col px-20 py-10 text-2xl backdrop-blur-md max-sm:text-lg"
	>
		<div class="mb-10 flex items-center justify-end">
			<button
				on:click={async () => {
					showCharacter = !showCharacter;
				}}
				class="cursor-pointer"><X size={$dynamicIconSize} /></button
			>
		</div>
	</div>
{/if}
