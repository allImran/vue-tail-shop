<template>
    <div class="my-scroll grid grid-cols-2 gap-2 h-48">
        <div v-for="(n, i) in 24" :key="i">
            <button class="focus:border-blue-500 border">
                <img
                    class="h-12 w-full"
                    src="/images/brand.jpg" alt=""
                >
            </button>
        </div>
    </div>

    <div class="flex mt-4 items-center">
        <p 
            class="text-xs  font-semibold text-blue-500 mr-1 uppercase">
            More Brand
        </p>
        <span class="text-blue-500 mdi mdi-plus"></span>
    </div>
</template>

<script>
  export default {
    name: 'BrandFilter',
    components:{
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
    .my-scroll{
        overflow-y: scroll;
    }
</style>