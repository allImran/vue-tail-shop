<template>
	<div :class="`flex items-center ${flexPosition} mr-10 mt-5`">
		<p class="font-md mr-3 font-semibold text-gray-700 capitalize ">{{ text }}</p>
		<a
			v-for="(link, index) in links"
			:key="index"
			:href="link.link"
			class="w-5 mx-1 text-xs sm:text-base"
		>
			<img :src="link.icon" alt="">
		</a>
	</div>
</template>
<script>
	export default {
		name: 'SocialBox',
		props: {
			text: String,
			flexPosition: String,
			links: {
				required: true
			}
		}
	}
</script>