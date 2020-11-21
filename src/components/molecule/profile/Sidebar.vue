<template>
  <div class="bg-white shadow-md rounded">
      <div class="p-3 border-b border-gray-300">
          <p class="uppercase text-gray-500 font-semibold"> people with similar skill</p>
      </div>

      <div class="flex flex-col border-b border-gray-300 pb-5">
            <div
                v-for="(n, i) in 3"
                :key="i"
                class="flex items-center p-3"
            >
                <RoundImage 
                    image="/images/client.jpg"
                    heightWeight="w-16 h-16"
                />
                <div>
                    <p class="ml-3 text-md font-semibold text-gray-700">Comandar Bolta</p>
                    <p class="ml-3 text-xs text-gray-600">Team Co-Ordinator</p>
                </div>
            </div>
      </div>
      <div class="p-3 flex justify-center">
        <button
            class="font-semibold text-gray-500 focus:outline-none"
        >
            Load More >
        </button>
      </div>
  </div>
</template>

<script>
    import RoundImage from '@/components/atom/RoundImage'
  export default {
    name: 'Sidebar',
    components:{
        RoundImage
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