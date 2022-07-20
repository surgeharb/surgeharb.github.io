<script>
	export let tabs = [
		{ name: 'Tab1', component: null },
		{ name: 'Tab2', component: null },
		{ name: 'Tab3', component: null }
	];

	let selected = 0;
</script>

<div class="wrapper flex justify-space-between align-center radius">
	{#each tabs as tab, i}
		<div
			class="flex justify-center align-center radius"
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
		margin-bottom: 2.5rem;
		height: 4rem;
	}

	.wrapper > div {
		width: 100%;
		cursor: pointer;
		will-change: background-color;
		transition: background-color 0.3s ease;
		text-align: center;
		margin: 0 0.5rem;
		height: 3rem;
	}

	.wrapper > div:hover {
		background-color: #e5e5ee;
	}

	.wrapper > div.selected {
		background-color: #fff;
	}

	@media (min-width: 400px) {
		.wrapper {
			gap: 0.5rem;
		}
	}
</style>
