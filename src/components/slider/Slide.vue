<template>
    <div class="slide">
        <!-- <img class="slide-image" :src="slide" alt=""> -->
        <GradientCard class="mx-2" />
    </div>
</template>

<script>
    import GradientCard from '@/components/atom/GradientCard'
  export default {
    name: '',
    components:{
        GradientCard
    },
    props:{
        slide: {
            required: true
        }
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
    .slide-image{
        width: 100%;
    }
    
</style>