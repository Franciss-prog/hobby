<!-- login route -->
<script lang="ts">
	import axios from 'axios';
	$: loading = false;
	let username: string = '';
	let password: string = '';
	const onRegister = async () => {
		loading = true;
		if (!username || !password) {
			console.error('input all fields');
			loading = false;
            return;
		}

		try {
			const response = await axios.post('http://localhost:3000/auth', { username, password });
			console.log(response.data);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error(error);
			}
		} finally {
			loading = false;
		}
	};
</script>

<section class="flex min-h-screen items-center justify-center">
	<form on:submit|preventDefault={onRegister} class="flex flex-col gap-6">
		<span class="text-3xl">LOGIN</span>
		<input
			type="text"
			placeholder="username"
			bind:value={username}
			class={`border ${!username || !password ? 'border-red' : 'border-black'}`}
		/>
		<input type="password" placeholder="password" bind:value={password} />

		<button
			disabled={loading}
			class="flex cursor-pointer items-center justify-center bg-black p-2 text-white"
		>
			{#if loading}
				<svg
					class="h-5 w-5 animate-spin text-black"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
					></circle>
					<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
					></path>
				</svg>
			{:else}
				Login
			{/if}
		</button>
	</form>
</section>
