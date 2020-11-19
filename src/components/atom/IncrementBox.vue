<template>
    <div class="flex items-center bg-gray-200 py-1 border border-gray-300 rounded mr-2">
        <button
            @click="increment"
            class="px-3 text-xl text-gray-600 focus:outline-none">
            <span class="mdi mdi-plus"></span>
        </button>
        <span class="text-xl font-semibold">{{ value }}</span>
        <button
            @click="decrement"
            class="px-3 text-xl text-gray-600 focus:outline-none">
            <span class="mdi mdi-minus"></span>
        </button>
    </div>
</template>

<script>
  export default {
    name: 'IncrementBox',
    components:{

    },
    props:{
    },
    data(){
      return{
        value: 1
      }
    },
    computed:{

    },
    watch:{

    },
    methods:{
        increment(){
            this.value++
        },
        decrement(){
            if(this.value == 1) {return ;}
            this.value--
        }
    }
  }
</script>