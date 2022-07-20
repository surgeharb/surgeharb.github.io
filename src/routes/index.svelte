<script>
	import Games from '../components/complex/Games.svelte';
	import Tools from '../components/complex/Tools.svelte';
	import Profile from '../components/complex/Profile.svelte';
	import Experience from '../components/complex/Experience.svelte';

	const isDesktop =
		typeof window !== 'undefined' &&
		window.matchMedia('only screen and (min-width: 1024px)').matches;
</script>

<div class="container" style="padding-top:3.5rem">
	<div class="row">
		<div class="eight columns">
			<Profile />
			<div class="only-desktop">
				<Experience />
			</div>
		</div>
		<div class="four columns">
			<Games />
			<Tools />
			<div class="only-mobile">
				<Experience />
			</div>
		</div>
	</div>
</div>

<style>
	.only-mobile {
		display: block;
	}

	.only-desktop {
		display: none;
	}

	@media (min-width: 1024px) {
		.only-mobile {
			display: none;
		}

		.only-desktop {
			display: block;
		}
	}
</style>
