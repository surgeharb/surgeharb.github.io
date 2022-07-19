<div class="card">
	<slot />
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: var(--box-shadow-sm);
		border-radius: var(--border-radius);
		background-color: #fff;
		margin-bottom: 2.5rem;
		padding: 2.5rem;
		width: 100%;
	}
</style>
