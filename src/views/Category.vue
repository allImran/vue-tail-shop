<template>
	<BrandSection />
	<CategorySection />
</template>

<script>
	import BrandSection from "@/components/molecule/BrandList";
	import CategorySection from "@/components/molecule/category/CategoriesInCard.vue"
	export default {
		name: 'CategoryPage',
		components: {
			BrandSection,
			CategorySection
		}
	}
</script>