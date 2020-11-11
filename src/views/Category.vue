<template>
	<BrandSection />
	<CategorySection />
	<ProductByCategorySection />
</template>

<script>
	import BrandSection from "@/components/molecule/BrandList";
	import CategorySection from "@/components/molecule/category/CategoriesInCard.vue"
	import ProductByCategorySection from "@/components/molecule/product/ProductByCategory.vue"
	export default {
		name: 'CategoryPage',
		components: {
			BrandSection,
			CategorySection,
			ProductByCategorySection
		}
	}
</script>