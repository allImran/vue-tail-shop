<template>
  <div class="origin-top-right absolute md:right-0 mt-2 w-64 rounded-md shadow-lg">
    <div class="rounded-md bg-white shadow-xs">
      <div class="py-3">
        <div class="grid grid-cols-3 gap-4">
            <card
                v-for="(item, i) in 4"
                :key="i"
                image="/images/facebook.png"
                imgStyle="w-8 mx-auto"
                title="Building"
                border="none"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Card from '@/components/atom/Card'
  export default {
    name: 'OtherAppMenu',
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