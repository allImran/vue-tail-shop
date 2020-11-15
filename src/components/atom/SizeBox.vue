<template>
    <div>
        <p class="font-semibold mb-3">Size: {{ size }}</p>
        <button
            v-for="(item, index) in sizes"
            :key="index"
            @click="size = item"
            :class="`focus:outline-none px-2 text-gray-500 border mr-2 ${item == size ? 'border-blue-300' : 'border-gray-300'}`"
        >
            {{ item }}
        </button>
        <p class="text-sm text-gray-500 mt-2">Find my size</p>
    </div>
</template>

<script>
  export default {
    name: 'SizeBox',
    components:{

    },
    props:{
        sizes: {
            default: ['M', 'L', 'S', 'XL', 'XXL']
        }
    },
    data(){
      return{
        size: this.sizes[0]
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