<template>
    <div class="px-5 pb-5 mt-5 ">
        <TextWithIcon 
            text="Certification"
            textStyle="capitalize text-lg text-blue-600 font-semibold"
            icon="mdi mdi-account"
            iconStyle=" text-xl text-blue-600"
        />
        <div class="grid md:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 px-5 border-b pb-10">
            <Card 
                v-for="(n, i) in 6"
                :key="i"
                title="Buet certified brand"
                titleStyle="font-semibold text-sm text-gray-700 capitalize"
                border="none"
                subTitle="more detail will be here"
                detail="Lorem ipsum dolor sit amet, consectetur adipisicin sed do eiusmod tempor ncididunt"
            />
        </div> 
    </div>
</template>

<script>
    import Card from '@/components/atom/Card'
    import TextWithIcon from '@/components/atom/TextWithIcon'
  export default {
    name: 'Certificate',
    components:{
        TextWithIcon,
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