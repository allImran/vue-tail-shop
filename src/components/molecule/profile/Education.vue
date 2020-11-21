<template>
    <div class="px-5 pb-5 mt-5 ">
        <TextWithIcon 
            text="Education"
            textStyle="capitalize text-lg text-blue-600 font-semibold"
            icon="mdi mdi-account"
            iconStyle=" text-xl text-blue-600"
        />
        <div class="px-5 mt-5 pb-10 border-b">
            <div class="flex">
                <div
                    v-for="(n, i) in 2"
                    :key="i"
                    class="mr-5"
                >
                    <RoundedImage 
                        image="/images/certificate.jpg"
                        heightWeight="w-20 h-20"
                    />
                    <Bordered />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TextWithIcon from '@/components/atom/TextWithIcon'
    import Bordered from '@/components/molecule/profile/Bordered'
    import RoundedImage from '@/components/atom/RoundImage'
  export default {
    name: 'Experience',
    components:{
        TextWithIcon,
        Bordered,
        RoundedImage
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