<template>
    <div class="flex items-center">
        <p class="text-sm text-gray-600 mr-2"><del>{{ realPrice }}</del></p>
        <p class="text-xl font-bold text-blue-600">{{ discountPrice }}</p>
    </div>
</template>

<script>
  export default {
    name: 'PriceBox',
    components:{

    },
    props:{
        realPrice: {default: '$880'},
        discountPrice: {default: '$680'}
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