<script>
	import Card from '../simple/Card/index.svelte';
	import Avatar from '../simple/Avatar/index.svelte';
</script>

<Card compact>
	<div class="flex direction-column justify-space-between align-center">
		<Avatar
			circle
			size="lg"
			imageSrc="https://erenichu.sirv.com/Portfolio/pfp.jpg?w=108&h=108"
			imageSrcSet="https://erenichu.sirv.com/Portfolio/pfp.jpg?w=108&h=108 1x, https://erenichu.sirv.com/Portfolio/pfp.jpg?w=216&h=216 2x"
		/>
		<h5>Serge Harb</h5>
		<h6>Software Engineer</h6>
		<div class="social-wrapper">
			<a class="social" href="https://github.com/surgeharb" target="_blank">
				<img src="/svg/github.svg" width="12" height="12" alt="gh icon" />
				<span>surgeharb</span>
			</a>
			<div class="dot">•</div>
			<a class="social" href="https://twitter.com/surgeharb" target="_blank">
				<img src="/svg/twitter.svg" width="12" height="12" alt="twitter icon" />
				<span>surgeharb</span>
			</a>
		</div>
	</div>
</Card>

<style>
	h5 {
		margin: 0;
		margin-top: 1.5rem;
		font-weight: 500;
	}

	.social-wrapper {
		display: flex;
		margin-top: 0.5rem;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.social {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.social span {
		color: #585858;
		font-size: 12px;
	}

	.social:hover span {
		text-decoration: underline;
	}

	.dot {
		cursor: default;
	}
</style>
