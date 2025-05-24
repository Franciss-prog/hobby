<script>
	import { preferedDarkUser } from '$lib';
</script>

<section
	class="font-oswald relative h-screen w-full rounded-[44px] bg-cover bg-center"
	style="background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5139695.jpg&f=1&nofb=1&ipt=2abefdab61487fb67fcba9e5d5908dd884d4db12ff1acb1a8382bd536633ee50')"
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
					<a href="/anime" class="hover:underline">Anime</a>
					<a href="/manga" class="hover:underline">Manga</a>
					<a href="/characters" class="hover:underline">Characters</a>
				</div>
				<a href="/anime" class="hover:underline">Explore Now</a>
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
