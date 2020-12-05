<template>
    <div class="slide">
        <GradientCard 
            class="mx-2"
            :image="slide"
        />
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