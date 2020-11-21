<template>
    <img
        :class="`${imageStyle}`"
        :src="image" 
        alt=""
    >
</template>

<script>
  export default {
    name: 'Add',
    components:{

    },
    props:{
        image: {
            default: '/images/add2.jpg'
        },
        imageStyle: {
            default: 'mx-auto w-full'
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
  
</style>