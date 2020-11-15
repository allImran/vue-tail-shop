<template>
    <slot name="top"></slot>
    <div class="grid grid-cols-4 gap-4 px-2">
        <GradientCard :key="i" v-for="(n, i) in 4" />
    </div>
</template>

<script>
    import GradientCard from '@/components/atom/GradientCard'
  export default {
    name: 'ProjectCard',
    components:{
        GradientCard
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