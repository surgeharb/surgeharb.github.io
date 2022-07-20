<script>
	import ContentCard from '../ContentCard.svelte';
</script>

<div class="wrapper flex wrap justify-space-between align-center">
	<ContentCard
		name="Traverse"
		image="/images/avasharks.jpeg"
		link="https://traverse.avasharks.io"
	/>
	<ContentCard
		name="Atlantis Gate"
		image="/images/ag.svg"
		imageStyle="object-fit: scale-down"
		link="https://atlantisgate.avasharks.io"
	/>
	<ContentCard
		name="Ava Sharks"
		image="/images/avasharks.jpeg"
		link="https://avasharks.io"
	/>
	<ContentCard name="BrainPush" image="/images/brainpush.png" />
	<ContentCard name="1Coach Pro" image="/images/1coachpro.png" />
	<ContentCard
		name="Streaming"
		image="/images/ltv.png"
		link="https://deploy-preview-4--ltv-streaming.netlify.app/en"
	/>
	<ContentCard name="AnyShop" image="/images/anyshop.png" />
	<ContentCard
		name="Stackbeam"
		image="/images/stackbeam.webp"
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
