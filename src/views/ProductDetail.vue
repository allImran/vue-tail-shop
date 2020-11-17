<template>
    <GalleryAndDetailSection />
    <DesAndSpeSection />
</template>

<script>
  import GalleryAndDetailSection from '@/components/molecule/detail/GalleryAndDetail'
  import DesAndSpeSection from '@/components/molecule/detail/DesAndSpe'
  export default {
    name: 'ProductDetail',
    components:{
      GalleryAndDetailSection,
      DesAndSpeSection
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