<template>
  <div 
    class="h-48 relative rounded bg-center bg-cover"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
      <div class="p-3 rounded absolute bottom-0 w-full bg-gradient-to-r from-blue-500 to-teal-500">
            <p class="text-gray-100 text-sm">{{ title }}</p>
            <p class="text-gray-100 text-xs text-yellow-400">
                {{ date }} 
                <span class="mx-2">|</span> 
                {{ type }}
            </p>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'GradientCard',
    components:{

    },
    props:{
        title: {
            type: String,
            default: 'This is the default title on props'
        },
        image: {
            type: String,
            default: '/images/interior1.jpg'
        },
        date: {
            type: String,
            default: '07-Aug-2020'
        },
        type: {
            type: String,
            default: 'Default'
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