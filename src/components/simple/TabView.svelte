<script>
	export let tabs = [
		{ name: 'Tab1', component: null },
		{ name: 'Tab2', component: null },
		{ name: 'Tab3', component: null }
	];

	let selected = 0;
</script>

<div class="wrapper flex justify-space-between align-center">
	{#each tabs as tab, i}
		<div
			class="flex justify-center align-center"
			class:selected={selected === i}
			on:click={() => (selected = i)}
		>
			{tab.name}
		</div>
	{/each}
</div>
<svelte:component this={tabs[selected].component} />

<style>
	.wrapper {
		background-color: var(--background-color);
		border-radius: var(--border-radius);
		margin-bottom: 2.5rem;
		height: 4rem;
		gap: 0.5rem;
	}

	.wrapper > div {
		width: 100%;
		text-align: center;
		border-radius: var(--border-radius);
		margin: 0 0.5rem;
		height: 3rem;
	}

	.wrapper > div:hover {
		background-color: #e5e5ee;
	}

	.wrapper > div.selected {
		background-color: #fff;
	}
</style>
