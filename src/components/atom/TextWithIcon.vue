<template>
	<div class="flex items-center">
		<span :class="`${icon} ${iconStyle}`"></span>
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