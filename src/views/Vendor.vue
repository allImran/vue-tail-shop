<template>
	<CoverDescriptionSection />
	<ProductServiceSection />
</template>

<script>
	import CoverDescriptionSection from '@/components/molecule/vendor/CoverDescription'
	import ProductServiceSection from '@/components/molecule/vendor/ProductService'
	export default{
		name: 'Profile',
		components: {
			CoverDescriptionSection,
			ProductServiceSection
		}
	}
</script>