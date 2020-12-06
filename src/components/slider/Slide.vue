<template>
    <div class="slide">
        <slot :slide="slide"></slot>
    </div>
</template>

<script>
    //import GradientCard from '@/components/atom/GradientCard'
  export default {
    name: '',
    components:{
        //GradientCard
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