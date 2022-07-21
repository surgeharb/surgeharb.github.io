<script>
	import ContentCard from '../ContentCard.svelte';
</script>

<div class="wrapper flex wrap justify-space-between align-center">
	<ContentCard
		name="Traverse"
		imageSrc="https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=72&h=72"
		imageSrcSet="https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=72&h=72 1x, https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=144&h=144 2x"
		link="https://traverse.avasharks.io"
	/>
	<ContentCard
		name="Atlantis Gate"
		imageSrc="https://erenichu.sirv.com/Portfolio/ag.svg"
		imageStyle="object-fit: scale-down"
		link="https://atlantisgate.avasharks.io"
	/>
	<ContentCard
		name="Ava Sharks"
		imageSrc="https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=72&h=72"
		imageSrcSet="https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=72&h=72 1x, https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=144&h=144 2x"
		link="https://avasharks.io"
	/>
	<ContentCard
		name="BrainPush"
		imageSrc="https://erenichu.sirv.com/Portfolio/brainpush.png?w=72&h=72"
	/>
	<ContentCard
		name="1Coach Pro"
		imageSrc="https://erenichu.sirv.com/Portfolio/1coachpro.png?w=72&h=72"
	/>
	<ContentCard
		name="Streaming"
		imageSrc="https://erenichu.sirv.com/Portfolio/ltv.png?w=72&h=72"
		link="https://deploy-preview-4--ltv-streaming.netlify.app/en"
	/>
	<ContentCard
		name="AnyShop"
		imageSrc="https://erenichu.sirv.com/Portfolio/anyshop.png?w=72&h=72"
		imageSrcSet="https://erenichu.sirv.com/Portfolio/anyshop.png?w=72&h=72 1x, https://erenichu.sirv.com/Portfolio/anyshop.png?w=144&h=144 2x"
	/>
	<ContentCard
		name="Stackbeam"
		imageSrc="https://erenichu.sirv.com/Portfolio/stackbeam.webp?cx=75&cw=72&w=225&h=72"
		imageSrcSet="https://erenichu.sirv.com/Portfolio/stackbeam.webp?cx=75&cw=72&w=225&h=72 1x, https://erenichu.sirv.com/Portfolio/stackbeam.webp?cx=150&cw=144&w=450&h=144 2x"
		link="https://github.com/nodeward/stackbeam"
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
