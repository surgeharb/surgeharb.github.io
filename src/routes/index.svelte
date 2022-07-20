<script>
	import Games from '../components/complex/Games.svelte';
	import Tools from '../components/complex/Tools.svelte';
	import Profile from '../components/complex/Profile.svelte';
	import Experience from '../components/complex/Experience.svelte';
</script>

<div class="container" style="padding-top:3.5rem">
	<div class="row">
		<div class="eight columns">
			<Profile />
			<Experience />
		</div>
		<div class="four columns">
			<Games />
			<Tools />
		</div>
	</div>
</div>
