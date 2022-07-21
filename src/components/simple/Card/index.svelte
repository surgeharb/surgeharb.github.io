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

<style src="./styles.css"></style>
