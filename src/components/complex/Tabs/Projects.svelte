<script>
	import ContentCard from '../ContentCard.svelte';
</script>

<div class="wrapper flex wrap justify-space-between align-center">
	<ContentCard />
	<ContentCard />
	<ContentCard />
	<ContentCard />
	<ContentCard />
	<ContentCard />
	<ContentCard />
	<ContentCard />
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
