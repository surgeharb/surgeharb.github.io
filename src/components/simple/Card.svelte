<div class="card">
	<slot />
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 0px 2px 6px -2px rgba(24, 39, 75, 0.08), 0px 4px 8px -2px rgba(24, 39, 75, 0.05);
		background-color: #fff;
		border-radius: 1.5rem;
		margin-bottom: 2rem;
		padding: 2.5rem;
		width: 100%;
	}
</style>
