<script>
	export let h = false;
	export let mb0 = false;
	export let hover = false;
	export let compact = false;
	export let fullHeight = false;
</script>

<div
	class:mb0
	class:hover
	class:compact
	class:full-height={fullHeight}
	class:vertical={!h}
	class:horizontal={h}
	class="flex radius"
>
	<slot />
</div>

<style src="./styles.css"></style>
