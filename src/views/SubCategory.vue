<template>
    <TopNavbarSection />
    <AddSection />
    <VendorSection />
    <FilterAndProductSection />
</template>
<script>
    import TopNavbarSection from '@/components/molecule/subcategory/TopNavbar'
    import AddSection from '@/components/molecule/subcategory/AddSection'
    import VendorSection from '@/components/molecule/subcategory/VendorSection'
    import FilterAndProductSection from '@/components/molecule/subcategory/FilterAndProduct'
  export default {
    name: 'SubCategoryPage',
    components:{
        TopNavbarSection,
        AddSection,
        VendorSection,
        FilterAndProductSection
    },
    props:{

    },
    data(){
      return{

      }
    },
    computed:{

    },
    watch:{

    },
    methods:{

    }
  }
</script>

<style>
  
</style>