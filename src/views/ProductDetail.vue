<template>
    <GalleryAndDetailSection />
    <DesAndSpeSection />
    <!-- <AvailableProductSection /> -->
    <SimilarProductSection />
</template>

<script>
  import GalleryAndDetailSection from '@/components/molecule/detail/GalleryAndDetail'
  import DesAndSpeSection from '@/components/molecule/detail/DesAndSpe'
  // import AvailableProductSection from '@/components/molecule/detail/AvailableProduct'
  import SimilarProductSection from '@/components/molecule/detail/SimilarProduct'
  export default {
    name: 'ProductDetail',
    components:{
      GalleryAndDetailSection,
      DesAndSpeSection,
      // AvailableProductSection,
      SimilarProductSection
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