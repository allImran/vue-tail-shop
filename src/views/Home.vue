<template>
  <SliderSection />
  <VendorListCarousel />
	<BrandSection imageStyle="w-3/4 py-5" :items="bandImage" textTitle="Featured Brands">
		<template v-slot:topbar>
			<TopBar tabPosition="justify-end" tabMargin="ml-5"/>
		</template>
	</BrandSection>

	<ProductSection bg-color="#28CFBE" />

	<ProductSection bg-color="#3D81E3"/>

  <div class="flex w-full container mx-auto mb-10 shadow-md">
    <img class="w-full h-24" src="/images/add5.png" alt="" />
  </div>

	<ProductSection bg-color="#FFAE00"/>
</template>

<script>
// import { response } from "@/data/products";
import VendorListCarousel  from "@/components/molecule/home/VendorSlide";
import SliderSection  from "@/components/molecule/home/SliderSection";
import BrandSection from "@/components/molecule/BrandList";
import TopBar from "@/components/molecule/navigation/TopBar";
import ProductSection from "@/components/molecule/product/ProductSection";
import {bandImage} from "@/data/bandImage";

export default {
  name: "Home",
  components: {
    VendorListCarousel,
    ProductSection,
    BrandSection,
    SliderSection,
    TopBar
  },
  mounted() {
  },
  computed: {
    bandImage() {
      return bandImage;
    }
  },
};
</script>
