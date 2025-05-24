<script lang="ts">
	import { X, AlignRight } from '@lucide/svelte';
	let openNavLinks: boolean = false;
	import { preferedDarkUser, dynamicIconSize } from '$lib/store/ui';

	$: toggler = $preferedDarkUser;
	const closeAfterClicked = () => (openNavLinks = false);
</script>

{#if openNavLinks}
	<div
		class="fixed inset-0 z-10 flex flex-col px-20 py-10 text-2xl backdrop-blur-xl max-sm:text-lg"
	>
		<div class="mb-10 flex items-center justify-end">
			<!-- Close Button -->
			<button class="cursor-pointer" on:click={() => (openNavLinks = !openNavLinks)}>
				{#if openNavLinks}
					<X size={$dynamicIconSize} />
				{/if}
			</button>
		</div>
		<!-- Nav Links -->
		<div
			class={`mt-5 flex h-screen flex-col items-start justify-center space-y-5 text-center text-5xl max-md:space-y-4 max-sm:space-y-3 ${$preferedDarkUser ? 'text-white' : 'text-black'}`}
		>
			<a href="/" class="hover:underline" on:click={closeAfterClicked}>--> Home</a>
			<a href="/anime/page/1" class="hover:underline" on:click={closeAfterClicked}>--> Anime</a>
			<a href="/manga/page/1" class="hover:underline" on:click={closeAfterClicked}>--> Manga</a>
			<a href="/characters/page/1" class="hover:underline" on:click={closeAfterClicked}
				>--> Characters</a
			>
			<span>
				Change to
				<button
					class="cursor-pointer underline"
					on:click={() => preferedDarkUser.set(!$preferedDarkUser)}
				>
					{toggler ? 'Light ' : 'Dark '}Mode
				</button>
			</span>
		</div>
	</div>
{/if}

<nav class={`mb-20 flex w-full items-center justify-between text-3xl `}>
	<a href="/"> ぎ </a>
	<button class="cursor-pointer" on:click={() => (openNavLinks = !openNavLinks)}
		><AlignRight size={$dynamicIconSize} /></button
	>
</nav>
