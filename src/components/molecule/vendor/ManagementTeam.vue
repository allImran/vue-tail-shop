<template>
    <slot name="top"></slot>

    <div class="grid grid-cols-5 gap-4 px-5">
        <div
            v-for="(n, i) in 5"
            :key="i"
            class="flex justify-center items-center">
            <RoundImage 
                image="/images/client.jpg"
                heightWeight="w-24 h-24"
            />
            <div>
                <p class="ml-3 text-md font-semibold text-gray-700">Comandar Bolta</p>
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