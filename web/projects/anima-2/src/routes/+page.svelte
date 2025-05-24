<script lang="ts">
	import { dynamicIconSize, preferedDarkUser } from '$lib/store/ui';
	import { Moon, Sun } from '@lucide/svelte';
	
</script>

<section
	class="font-oswald relative h-screen w-full rounded-[44px] bg-cover bg-center"
	style="background-image: url('https://images.alphacoders.com/823/thumb-1920-823775.jpg')"

	
>
	<!-- Black Overlay -->
	<div class="absolute inset-0 z-0 rounded-[44px] bg-black opacity-50"></div>

	<div class="font-oswald flex h-full flex-col justify-between">
		<header class="z-0 flex h-36 items-center justify-center px-8">
			<nav
				class={`font-poppins z-0 flex h-20 w-full items-center justify-between rounded-xl px-8 text-2xl ${$preferedDarkUser ? 'bg-black text-white' : 'bg-white text-black'}`}
			>
				<a href="/" class="text-2xl font-bold"> 語 </a>
				<!-- navlinks -->
				<div class="flex items-center gap-5">
					<a href="/anime/page/1" class="hover:underline">Anime</a>
					<a href="/manga/page/1" class="hover:underline">Manga</a>
					<a href="/characters/page/1" class="hover:underline">Characters</a>
				</div>
				<button class="cursor-pointer" on:click={() => preferedDarkUser.set(!$preferedDarkUser)}>
					{#if $preferedDarkUser}
						<Moon size={$dynamicIconSize} />
					{:else}
						<Sun size={$dynamicIconSize} />
					{/if}
				</button>
			</nav>
		</header>
		<div class="flex h-full items-end justify-between">
			<div class=" z-0 flex flex-col items-start gap-5 px-8 py-5 text-4xl text-white">
				<span class="font-michroma text-[100px]">ANIMA</span>
				<span>All the anime info you need — in one place.</span>
			</div>
			<!-- card -->
			<div
				class={`z-0 flex h-[200px] w-lg flex-col justify-center gap-3 rounded-tl-[44px] px-8 py-5 text-5xl ${$preferedDarkUser ? 'bg-black text-white' : 'bg-white text-black'}`}
			>
				<span> Explore anime, manga, characters , and more.</span>
			</div>
		</div>
	</div>
</section>
