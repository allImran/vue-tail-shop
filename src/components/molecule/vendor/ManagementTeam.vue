<template>
    <slot name="top"></slot>

    <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 sm:gap-4 px-5">
        <div
            v-for="(n, i) in 5"
            :key="i"
            class="flex justify-center items-center">
            <RoundImage 
                image="/images/client.jpg"
                heightWeight="w-16 h-16 sm:w-24 sm:h-24"
            />
            <div>
                <p class="ml-3 text-sm sm:text-md font-semibold text-gray-700">Comandar Bolta</p>
                <p class="ml-3 text-xs text-gray-600">Team Co-Ordinator</p>
            </div>
        </div>
    </div>
</template>

<script>
    import RoundImage from '@/components/atom/RoundImage'
  export default {
    name: 'ManagementTeam',
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