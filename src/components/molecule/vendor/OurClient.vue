<template>
  <p class="text-gray-700 text-xl font-bold mt-5 mb-3 capitalize">some of our client</p>
  <div class="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-4 px-3">
    <Card
        :key="i"
        v-for="(n, i) in 9"
        image="/images/google.png"
        border="none"
    />
  </div>
</template>

<script>
    import Card from '@/components/atom/Card'
  export default {
    name: 'OurClient',
    components:{
        Card
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