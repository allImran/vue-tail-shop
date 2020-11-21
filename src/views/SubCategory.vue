<template>
    <TopNavbarSection />
    <AddSection />
    <VendorSection />
</template>
<script>
    import TopNavbarSection from '@/components/molecule/subcategory/TopNavbar'
    import AddSection from '@/components/molecule/subcategory/AddSection'
    import VendorSection from '@/components/molecule/subcategory/VendorSection'
  export default {
    name: 'SubCategoryPage',
    components:{
        TopNavbarSection,
        AddSection,
        VendorSection
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