<script lang="ts">
	import { AlignRight } from '@lucide/svelte';
</script>

<nav class="flex max-w-full items-center justify-between text-2xl mb-20">
	<a href="/" class="font-bold"> 語 </a>
	<div class="flex items-center gap-6">
		<!-- a tags -->
		<a href="/explore/anime" class="hover:underline">Anime</a>
		<a href="/explore/manga" class="hover:underline">Manga</a>
		<a href="/explore/characters" class="hover:underline">Characters</a>
	</div>
	<button class=" cursor-pointer"><AlignRight size={30} /></button>
</nav>
