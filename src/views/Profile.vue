<template>
	<CoverDescriptionSection />
	<ProductServiceSection />
</template>

<script>
	import CoverDescriptionSection from '@/components/molecule/profile/CoverDescription'
	import ProductServiceSection from '@/components/molecule/profile/ProductService'
	export default{
		name: 'Profile',
		components: {
			CoverDescriptionSection,
			ProductServiceSection
		}
	}
</script>