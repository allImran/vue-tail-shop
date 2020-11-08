<template>
	<BrandSection />
	<ProductSection />
</template>

<script>
// import { response } from "@/data/products";
import BrandSection from "@/components/molecule/BrandList.vue";
import ProductSection from "@/components/molecule/product/ProductSection.vue";
export default {
  name: "Home",
  components: {
    ProductSection,
    BrandSection
  },
  mounted() {
  },
};
</script>
