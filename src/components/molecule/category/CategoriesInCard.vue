<template>
	<div class="container mx-auto bg-white p-3 shadow-md mb-5">
		<TextWithIcon
			icon="mdi mdi-apps"
			iconStyle="text-pink-600 text-xl"
			text="shop by categories"
			textStyle="text-gray-700 text-xs truncate uppercase font-bold"
		/>
		<div class="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-2">
			<div
				v-for="(item, index) in aboutShops"
				:key="index"
			>
				<card
				:title="item.title"
        titleStyle="capitalize text-gray-700 text-center w-full hover:text-blue-500"
        :image="item.image_url"
        imgStyle="h-24"
			/>
			</div>
		</div>
	</div>
</template>

<script>
	import { aboutShops } from "@/data/aboutCategories"
	import Card from "@/components/atom/Card"
	import TextWithIcon from "@/components/atom/TextWithIcon"
	export default{
		name: 'CategoryCardView',
		components: {
			TextWithIcon,
			Card
		},
		computed: {
      aboutShops() {
				return aboutShops.slice(0, 18);
			}
		}

	}
</script>