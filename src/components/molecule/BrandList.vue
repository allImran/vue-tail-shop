<template>
	<div class="container bg-white mx-auto py-1 px-5 my-10">
		<div class="flex w-full">
			<TextWithIcon
				class="mt-3"
				icon="mdi mdi-check-decagram"
				iconStyle="text-pink-600 text-xl"
				text="Featured Brands"
				textStyle="text-gray-700 text-md truncate"
			/>
			<slot name="topbar"></slot>
		</div>
		<div class="flex flex-wrap px-5">
			<div
				v-for="n in 12"
				:key="n"
				class="w-1/6">
				<img class="w-full" src="/images/brand.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	import TextWithIcon from "@/components/atom/TextWithIcon"
	export default{
		name: 'BrandList',
		components: {
			TextWithIcon
		}
	}
</script>