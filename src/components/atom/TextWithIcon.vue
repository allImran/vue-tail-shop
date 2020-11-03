<template>
	<div class="flex flex-row items-center pb-2">
		<span :class="`px-1 ${icon} ${iconStyle}`"></span>
		<p :class="`px-1 ${textStyle}`">
			{{ text }}
		</p>
	</div>
</template>

<script>
	export default {
		name: 'TextWithIcon',
		props: {
			text: String,
			icon: String,
			textStyle: String,
			iconStyle: String
		}
	}
</script>