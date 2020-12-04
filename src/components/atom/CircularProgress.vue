<template>
  <svg id="svg" >
  
    <path fill="none" stroke-linecap="round" stroke-width="5" stroke="#f2f3f3"
          stroke-dasharray="250,250.2"
          d="M50 10
             a 40 40 0 0 1 0 80
             a 40 40 0 0 1 0 -80"/>
    
    <path fill="none" stroke-linecap="round" stroke-width="5" stroke="#4299e1"
          :stroke-dasharray="`${stroke},250.2`"
          d="M50 10
             a 40 40 0 0 1 0 80
             a 40 40 0 0 1 0 -80"/>
    <text x="50" y="50" class="circular-text" text-anchor="middle" dy="7" font-size="20">{{ percentage }}%</text>
</svg>

</template>

<script>
  export default {
    name: 'CircularProgress',
    components:{

    },
    props:{
      percentage: {
        required: true
      }
    },
    data(){
     
    },
    computed:{
      stroke() {
        return this.percentage / 100 * 250;
      }
    },
    watch:{

    },
    methods:{

    }
  }
</script>

<style>
  #svg{
    width: 100px;
    height: 100px;
  }
  .circular-text{
     font-size: 12px;
     color: #718096 !important;
     font-weight: bold;
  }
</style>