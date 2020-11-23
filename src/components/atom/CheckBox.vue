<template>
    <div class="flex items-center ">
        <input
            v-model="value"
            class="mr-2 border outline-gray-400"
            type="checkbox"
        >
        <label 
            for=""
            class="text-gray-600 text-xs" 
        >{{ label }} ({{ amount }})
        </label>
    </div>
</template>

<script>
  export default {
    name: '',
    components:{

    },
    props:{
        label: {
            default: 'Default Label'
        },
        amount: {
            default: '12'
        }
    },
    data(){
      return{
        value: false
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