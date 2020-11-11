<template>
	<BrandSection>
		<template v-slot:topbar>
			<TopBar tabPosition="justify-end" tabMargin="ml-5"/>
		</template>
	</BrandSection>
	<ProductSection />
</template>

<script>
// import { response } from "@/data/products";
import BrandSection from "@/components/molecule/BrandList.vue";
import TopBar from "@/components/molecule/navigation/TopBar.vue";
import ProductSection from "@/components/molecule/product/ProductSection.vue";
export default {
  name: "Home",
  components: {
    ProductSection,
    BrandSection,
    TopBar
  },
  mounted() {
  },
};
</script>
