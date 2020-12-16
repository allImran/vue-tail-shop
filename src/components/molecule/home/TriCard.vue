<template>
    <div class="bg-gray-100 p-3 rounded ">

       <TextWithIcon 
          :icon="slide.icon"
          :text="slide.title"
          textStyle="text-sm font-semibold text-gray-700"
          iconStyle="text-gray-700"
      />
      <p class="text-xs text-gray-500 ml-5 mb-3">{{ slide.quantity }} Ratings</p>
      <div class="grid grid-cols-3 gap-3 ">
      <Card
        v-for="(item, i) in slide.category"
        :key="i"
        :title="item.name"
        :image="item.image"
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