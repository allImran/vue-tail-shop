<template>
  <SliderSection />
  <!-- <VendorListCarousel /> -->
	<BrandSection>
		<template v-slot:topbar>
			<TopBar tabPosition="justify-end" tabMargin="ml-5"/>
		</template>
	</BrandSection>
	<ProductSection bg-color="#28CFBE" />
	<ProductSection bg-color="#3D81E3"/>
	<ProductSection bg-color="#FFAE00"/>
</template>

<script>
// import { response } from "@/data/products";
// import VendorListCarousel  from "@/components/molecule/vendor/VendorListCarousel";
import SliderSection  from "@/components/molecule/home/SliderSection";
import BrandSection from "@/components/molecule/BrandList";
import TopBar from "@/components/molecule/navigation/TopBar";
import ProductSection from "@/components/molecule/product/ProductSection";
export default {
  name: "Home",
  components: {
    // VendorListCarousel,
    ProductSection,
    BrandSection,
    SliderSection,
    TopBar
  },
  mounted() {
  },
};
</script>
