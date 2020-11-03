<template>
	<div class="bg-white">
		<div class="container mx-auto py-10">
			<img class="w-48 pb-5" src="/images/logo.jpg" alt="">
			<TextWithIcon
				icon="mdi mdi-google-maps"
				iconStyle="text-gray-600 text-2xl"
				text="Lorem ipsum dolor siectetur adipisicin"
				textStyle="text-gray-700 text-md"
			/>
			<TextWithIcon
				icon="mdi mdi-phone"
				iconStyle="text-gray-600 text-2xl"
				text="+990227 44488"
				textStyle="text-gray-700 text-md"
			/>
			<TextWithIcon
				icon="mdi mdi-email-outline"
				iconStyle="text-gray-600 text-2xl"
				text="support@domain.com"
				textStyle="text-gray-700 text-md"
			/>
		</div>
	</div>
</template>
<script>
	import TextWithIcon from '@/components/atom/TextWithIcon'
	export default{
		name: 'FooterBootom',
		components: {
			TextWithIcon
		}
	}
</script>