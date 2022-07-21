<script>
	import Avatar from '../simple/Avatar/index.svelte';

	export let url = '';
	export let leftText = '';
	export let rightText = '';
</script>

<div class="wrapper flex justify-space-between align-center">
	<div class="flex justify-space-between align-center">
		<Avatar circle size="xs" imageSrc={url} />
		<span class="left-text">{leftText}</span>
	</div>
	<span class="right-text">{rightText}</span>
</div>

<style>
	.wrapper {
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--background-color);
	}

	.wrapper:last-child {
		border: none;
		margin-bottom: 0;
		padding-bottom: 0;
	}

	.left-text {
		padding: 0 2rem;
		text-align: left;
	}

	.right-text {
		text-align: right;
		display: none;
	}

	@media (min-width: 500px) {
		.right-text {
			display: block;
		}
	}
</style>
