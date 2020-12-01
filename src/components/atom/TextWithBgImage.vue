<template>
    <div>
      <div 
        class="w-full flex items-center rounded h-20 bg-cover bg-center"
        :style="{ backgroundImage: 'url(' + image + ')' }"
        >
          <p class="text-2xl text-gray-100 uppercase font-semibold pl-10">{{ title }}</p>
      </div>
      <p class="mt-5 text-gray-700 text-sm">{{ detail }}</p>
    </div>
</template>

<script>
  export default {
    name: 'TextWithBgImage',
    components:{

    },
    props:{
        image: {
            type: String,
            default: '/images/lamp.jpg'
        },
        title: {
            type: String,
            default: 'Our vision'
        },
        detail: String
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