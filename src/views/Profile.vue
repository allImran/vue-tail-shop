<template>
	<PhotoAndDescriptionSection />
	<DetailAndSidebarSection />
</template>

<script>
	import PhotoAndDescriptionSection from '@/components/molecule/profile/PhotoAndDes'
	import DetailAndSidebarSection from '@/components/molecule/profile/DetailAndSidebar'
	export default{
		name: 'Vendor',
		components: {
			PhotoAndDescriptionSection,
			DetailAndSidebarSection	
		}
	}
</script>