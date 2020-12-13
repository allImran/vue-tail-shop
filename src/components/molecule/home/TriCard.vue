<template>
    <div class="grid grid-cols-3 gap-3 bg-gray-100 p-3">

      <div
        v-for="(n, i) in 3"
        :key="i"
      >
       <TextWithIcon 
          icon="mdi mdi-home"
          text="Our Project"
          textStyle="text-sm font-semibold text-gray-700"
          iconStyle="text-gray-700"
      />
      <p class="text-xs text-gray-500 ml-5 mb-3">Subtitle</p>
      <Card 
        :image="slide.img"
        imgStyle="w-full rounded h-24 object-cover"
        border="none"
        titleStyle="text-gray-700 font-semibold text-xs text-left w-full hover:text-red-500"
      />
      </div>
    </div>
</template>

<script>
  import Card from '@/components/atom/Card'
  import TextWithIcon from '@/components/atom/TextWithIcon';
  export default {
    name: 'TriCard',
    components:{
      Card,
      TextWithIcon
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

    }
 }
</script>

<style>
  
</style>