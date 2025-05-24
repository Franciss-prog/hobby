<script lang="ts">
	import { X, AlignRight } from 'lucide-svelte';
	let openNavLinks: boolean = false;
	import { dynamicIconSize, preferedDarkUser } from '$lib';

	$: toggler = $preferedDarkUser;
	const closeAfterClicked = () => (openNavLinks = false);
</script>

{#if openNavLinks}
	<div
		class="fixed inset-0 z-10 flex flex-col items-center justify-center  text-2xl  backdrop-blur-md max-sm:text-lg"
	>
		<!-- Close Button -->
		<button
			class="absolute top-10 right-16 cursor-pointer"
			on:click={() => (openNavLinks = !openNavLinks)}
		>
			{#if openNavLinks}
				<X size={$dynamicIconSize} />
			{/if}
		</button>

		<!-- Nav Links -->
		<div
			class="mt-5 flex flex-col items-start space-y-5 text-center text-3xl max-md:space-y-4 max-sm:space-y-3 text-white"
		>
			<a href="/" class="hover:underline" on:click={closeAfterClicked}>Home</a>
			<a href="/anime" class="hover:underline" on:click={closeAfterClicked}>Anime</a>
			<a href="/manga" class="hover:underline" on:click={closeAfterClicked}>Manga</a>
			<a href="/characters" class="hover:underline" on:click={closeAfterClicked}>Characters</a>
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

<nav
	class={`mb-20 flex w-full items-center justify-between text-3xl `}
>
	<a href="/"> ぎ </a>
	<button class="cursor-pointer" on:click={() => (openNavLinks = !openNavLinks)}
		><AlignRight size={$dynamicIconSize} /></button
	>
</nav>
