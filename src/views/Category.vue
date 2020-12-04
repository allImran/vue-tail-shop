<template>
  <TopNavbarSection />
  <SliderSection class="mt-5"/>
  <BrandSection imageStyle="w-3/4 py-5" :items="bandImage" textTitle="shop by brands"/>
  <CategorySection/>
  <ProductByCategorySection/>
</template>

<script>
import BrandSection from "@/components/molecule/BrandList";
import CategorySection from "@/components/molecule/category/CategoriesInCard.vue"
import ProductByCategorySection from "@/components/molecule/product/ProductByCategory.vue"
import SliderSection from "@/components/molecule/category/SliderSection"
import TopNavbarSection from '@/components/molecule/subcategory/TopNavbar'
import {bandImage} from "@/data/bandImage";

export default {
  name: 'CategoryPage',
  components: {
    BrandSection,
    CategorySection,
    ProductByCategorySection,
    SliderSection,
    TopNavbarSection
  },
  computed: {
    bandImage() {
      return bandImage;
    }
  },
}
</script>