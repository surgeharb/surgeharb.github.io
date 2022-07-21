<script>
	import Avatar from '../simple/Avatar.svelte';
	import Card from '../simple/Card.svelte';
</script>

<Card>
	<h6 class="title">Cool Games</h6>
	<a href="#">
		<Card h hover mb0 compact>
			<Avatar
				size="sm"
				imageSrc="https://erenichu.sirv.com/Portfolio/game.webp?w=54&h=54"
				imageSrcSet="https://erenichu.sirv.com/Portfolio/game.webp?w=54&h=54 1x, https://erenichu.sirv.com/Portfolio/game.webp?w=108&h=108 2x"
			/>
			<div class="flex align-center">Metaverse RPG</div>
		</Card>
	</a>
</Card>

<style>
	.title {
		font-weight: 600;
		color: var(--secondary-color);
	}
	div {
		margin-left: 1.5rem;
	}
	a {
		margin-bottom: 1.5rem;
	}
	a:last-child {
		margin-bottom: 0;
	}
</style>
