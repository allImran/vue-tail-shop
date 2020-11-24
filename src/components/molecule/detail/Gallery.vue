<template>
    <img
        class="w-full h-56 object-fill my-2"
        src="/images/interior2.png"
        alt=""
    >
    <div class="flex">
        <button
            class="mr-5 bg-transparent focus:outline-none focus:border-gray-300 focus:shadow-outline"
            v-for="(n, i) in 3"
            :key="i"
        >
            <img
                class="h-16 w-24 object-fill my-2 "
                src="/images/interior1.jpg" 
                alt=""
            >
        </button>
    </div>
</template>

<script>
  export default {
    name: 'Gallery',
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
  
</style>