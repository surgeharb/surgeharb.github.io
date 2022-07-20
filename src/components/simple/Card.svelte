<script>
	export let h = false;
	export let mb0 = false;
	export let hover = false;
	export let compact = false;
</script>

<div
	class:mb0
	class:hover
	class:compact
	class:vertical={!h}
	class:horizontal={h}
	class="flex radius"
>
	<slot />
</div>

<style>
	div {
		box-shadow: var(--box-shadow-sm);
		background-color: #fff;
		margin-bottom: 2.5rem;
		padding: 2.5rem 1.5rem;
		width: 100%;
	}

	@media (min-width: 400px) {
		div {
			padding: 2.5rem;
		}
	}

	.horizontal {
		flex-direction: row;
		justify-content: initial;
	}

	.vertical {
		flex-direction: column;
		justify-content: space-between;
	}

	.compact {
		padding: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.mb0 {
		margin-bottom: 0;
	}

	.hover {
		transition: box-shadow 0.3s ease;
		will-change: box-shadow;
	}

	.hover:hover {
		box-shadow: var(--box-shadow-md);
	}
</style>
