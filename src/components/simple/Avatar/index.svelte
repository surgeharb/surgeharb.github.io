<script lang="ts">
	type sizesType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	const sizes: Record<sizesType, string> = {
		xs: '36px',
		sm: '54px',
		md: '72px',
		lg: '108px',
		xl: '144px'
	};

	export let size: sizesType = 'md';
	export let circle = false;
	export let imageStyle = '';
	export let imageSrcSet = '';
	export let imageSrc = '';

	const imgSrc =
		imageSrc ||
		'https://erenichu.sirv.com/Portfolio/pfp.jpg?grayscale=true&blur=30&w=108&h=108';
</script>

<img
	src={imgSrc}
	srcset={imageSrcSet}
	width={sizes[size]}
	height={sizes[size]}
	style={imageStyle}
	alt="profile"
	class:circle
/>

<style src="./styles.css"></style>
