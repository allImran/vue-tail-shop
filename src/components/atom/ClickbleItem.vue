<template>
	<router-link :to="link">
		<div class="flex flex-row items-center">
			<span :class="`${icon} ${iconStyle}`"></span>
			<p :class="`px-1 ${textStyle}`">
				{{ text }}
			</p>
		</div>
	</router-link>
</template>

<script>
	export default {
		name: 'TextWithIcon',
		props: {
			text: String,
			icon: String,
			textStyle: String,
			iconStyle: String,
			link: {default: '#'}
		}
	}
</script>