<script>
	import Card from '../../simple/Card/index.svelte';
</script>

<div class="wrapper">
	<Card mb0 compact>
		<div class="img-container flex justify-center align-center">
			<img src="/svg/plus.svg" alt="plus icon" width="24" height="24" />
			<img
				class="show-on-hover"
				src="/svg/plus-hover.svg"
				alt="hover plus icon"
				width="24"
				height="24"
			/>
		</div>
	</Card>
</div>

<style>
	.wrapper {
		z-index: 10;
		cursor: pointer;
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
	}
	@media (min-width: 768px) {
		.wrapper {
			bottom: 3rem;
			right: 3rem;
		}
	}
	.flex {
		padding: 0.5rem;
	}
	.show-on-hover {
		display: none;
	}
	.wrapper:hover img {
		display: none;
	}
	.wrapper:hover .show-on-hover {
		display: block;
	}
</style>
