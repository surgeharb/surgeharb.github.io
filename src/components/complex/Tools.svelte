<script>
	import Avatar from '../simple/Avatar.svelte';
	import Card from '../simple/Card.svelte';
</script>

<Card>
	<h6 class="title">Awesome Tools</h6>
	<a href="#">
		<Card h hover mb0 compact>
			<Avatar
				size="sm"
				imageSrc="https://erenichu.sirv.com/Portfolio/wallet.webp?w=54&h=54"
				imageSrcSet="https://erenichu.sirv.com/Portfolio/wallet.webp?w=54&h=54 1x, https://erenichu.sirv.com/Portfolio/wallet.webp?w=108&h=108 2x"
			/>
			<div class="flex align-center">Multi-Wallet Manager</div>
		</Card>
	</a>
	<a href="#">
		<Card h hover mb0 compact>
			<Avatar
				size="sm"
				imageSrc="https://erenichu.sirv.com/Portfolio/wallet.webp?w=54&h=54"
				imageSrcSet="https://erenichu.sirv.com/Portfolio/wallet.webp?w=54&h=54 1x, https://erenichu.sirv.com/Portfolio/wallet.webp?w=108&h=108 2x"
			/>
			<div class="flex align-center">Wallet Tracker</div>
		</Card>
	</a>
	<a href="#" target="_blank">
		<Card h hover mb0 compact>
			<Avatar
				size="sm"
				imageSrc="https://erenichu.sirv.com/Portfolio/twitter.jpeg?cy=3&w=54&h=54"
				imageSrcSet="https://erenichu.sirv.com/Portfolio/twitter.jpeg?cy=3&w=54&h=54 1x, https://erenichu.sirv.com/Portfolio/twitter.jpeg?cy=6&w=108&h=108 2x"
			/>
			<div class="flex align-center">Twitter Banner Generator</div>
		</Card>
	</a>
	<a href="https://bulksender.avasharks.io" target="_blank">
		<Card h hover mb0 compact>
			<Avatar
				size="sm"
				imageSrc="https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=72&h=72"
				imageSrcSet="https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=72&h=72 1x, https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=144&h=144 2x"
			/>
			<div class="flex align-center">
				Avalanche Ava Sharks - NFTs Bulk Sender
			</div>
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
