<template>
	<CoverDescriptionSection />
	<ProductServiceSection textTitle="products & services" />
	<AboutUsSection />
</template>

<script>
	import CoverDescriptionSection from '@/components/molecule/vendor/CoverDescription'
	import ProductServiceSection from '@/components/molecule/vendor/ProductService'
	import AboutUsSection from '@/components/molecule/vendor/AboutUs'
	export default{
		name: 'Vendor',
		components: {
			CoverDescriptionSection,
			ProductServiceSection,
			AboutUsSection
		}
	}
</script>