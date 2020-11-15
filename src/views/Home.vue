<template>
  <VendorListCarousel />
	<BrandSection>
		<template v-slot:topbar>
			<TopBar tabPosition="justify-end" tabMargin="ml-5"/>
		</template>
	</BrandSection>
	<ProductSection />
</template>

<script>
// import { response } from "@/data/products";
import VendorListCarousel  from "@/components/molecule/vendor/VendorListCarousel";
import BrandSection from "@/components/molecule/BrandList";
import TopBar from "@/components/molecule/navigation/TopBar";
import ProductSection from "@/components/molecule/product/ProductSection";
export default {
  name: "Home",
  components: {
    VendorListCarousel,
    ProductSection,
    BrandSection,
    TopBar
  },
  mounted() {
  },
};
</script>
