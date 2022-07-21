<script lang="ts">
	type Tab = {
		name: string;
		component: any;
	};

	export let tabs: Tab[] = [];

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

<style src="./styles.css"></style>
