<template>
    <slot name="top"></slot>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 px-3">
      <div
        v-for="(n, i) in 4"
        :key="i"
        class="flex p-3 h-48 mb-10 relative border border-solid border-gray-300 flex-col items-center"
        >
            <RoundImage 
                class="inside-image absolute left-0 ml-5"
                heightWeight="w-24 h-24"
                image="/images/client.jpg"
            />
            <div>
                <p class=" text-gray-800 uppercase font-bold">John doe</p>
                <p class=" text-sm text-gray-700 text-sm">CEO, Thundeal Ltd</p>
            </div>
            <p class="mt-5 text-gray-700 text-xs">Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Alias dolor hic, officiis cum provident autem laborum vel deleniti id ipsa enim. Distinctio, officia. Soluta et obcaecati beatae dolor. Accusamus, nihil.</p>
      </div>
    </div>
</template>

<script>
    import RoundImage from '@/components/atom/RoundImage'
  export default {
    name: '',
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
  .inside-image{
    top: -45px;
  }
</style>