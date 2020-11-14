<template>
  <div class="container mx-auto bg-white shadow-md mb-5 pb-10 px-3 py-10">
        <div class="grid grid-cols-2 gap-10 px-5">
            <TextWithBgImage 
                v-for="(n, i) in 2"
                :key="i"
                detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
        </div>
  </div>
</template>

<script>
    import TextWithBgImage from '@/components/atom/TextWithBgImage'
  export default {
    name: 'AboutUs',
    components:{
        TextWithBgImage
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