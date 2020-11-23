<template>
    <div class="relative">
        <input
            :class="`${inputStyle}`"
            v-model="search"
            type="text"
            :placeholder="placeholder"
        >
        <span 
            class="mdi mdi-magnify text-gray-500 text-lg absolute right-0"
        >
        </span>
    </div>
</template>

<script>
  export default {
    name: 'SearchComponent',
    components:{
        
    },
    props:{
        inputStyle: {
            default: 'border-b border-gray-400 text-xs italic text-gray-500 bg-transparent w-full focus:outline-none'
        },
        placeholder: {
            default: 'Search By Product'
        }
    },
    data(){
      return{
        search: ''
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