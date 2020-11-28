<template>
  <SliderSection/>
  <BrandSection/>
  <CategorySection/>
  <ProductByCategorySection/>
</template>

<script>
import BrandSection from "@/components/molecule/BrandList";
import CategorySection from "@/components/molecule/category/CategoriesInCard.vue"
import ProductByCategorySection from "@/components/molecule/product/ProductByCategory.vue"
import SliderSection from "@/components/molecule/category/SliderSection";

export default {
  name: 'CategoryPage',
  components: {
    BrandSection,
    CategorySection,
    ProductByCategorySection,
    SliderSection,
  }
}
</script>