<template>
  <svg id="svg" viewbox="0 0 100 100">
  
  <path fill="none" stroke-linecap="round" stroke-width="3" stroke="#d8e2eb"
        stroke-dasharray="250,250.2"
        d="M50 10
           a 40 40 0 0 1 0 80
           a 40 40 0 0 1 0 -80"/>
  
  <path fill="none" stroke-linecap="round" stroke-width="3" stroke="#4299e1"
        stroke-dasharray="5,250.2"
        d="M50 10
           a 40 40 0 0 1 0 80
           a 40 40 0 0 1 0 -80"/>
  <text x="50" y="50" text-anchor="middle" dy="7" font-size="20">1%</text>
</svg>

</template>

<script>
  export default {
    name: 'CircularProgress',
    components:{

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