<script>
	import ContentCard from '../ContentCard.svelte';
</script>

<div class="wrapper flex wrap align-center">
	<ContentCard
		link="https://sergeharb.com"
		image="/images/js.png"
		name="JavaScript"
	/>
	<ContentCard
		link="https://www.typescriptlang.org/"
		image="/images/ts.png"
		name="TypeScript"
	/>
	<ContentCard
		link="https://reactjs.org"
		image="/images/react.png"
		name="React"
	/>
	<ContentCard
		link="https://docs.soliditylang.org/en/v0.8.15/"
		image="/images/solidity.png"
		name="Solidity"
	/>
</div>

<style>
	.wrapper {
		gap: 1.5rem;
		justify-content: space-evenly;
	}
	@media (min-width: 750px) {
		.wrapper {
			gap: 1.5rem;
			justify-content: space-between;
		}
	}
</style>
