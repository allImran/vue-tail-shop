<template>
    <div class="h-32 overscroll-auto">
        <CheckBox
            class="mb-1"
            v-for="(n, i) in 24"
            :key= "i"
        />
    </div>
    <div class="flex mt-4 items-center">
        <p 
            class="text-xs  font-semibold text-blue-500 mr-1 uppercase">
            More product
        </p>
        <span class="text-blue-500 mdi mdi-plus"></span>
    </div>
</template>

<script>
    import CheckBox from '@/components/atom/CheckBox'
  export default {
    name: 'ProductType',
    components:{
        CheckBox
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
    .overscroll-auto{
        overflow-y: auto;
    }
</style>