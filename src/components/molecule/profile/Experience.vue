<template>
    <div class="px-5 pb-5 mt-5 ">
        <TextWithIcon 
            text="Experience"
            textStyle="capitalize text-lg text-blue-600 font-semibold"
            icon="mdi mdi-account"
            iconStyle=" text-xl text-blue-600"
        />
        <div class="px-5 mt-5 border-b pb-10">
            <div class="grid grid-cols-4 gap-5">
                <Bordered 
                    v-for="(n, i) in 3"
                    :key="i"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import TextWithIcon from '@/components/atom/TextWithIcon'
    import Bordered from '@/components/molecule/profile/Bordered'
  export default {
    name: 'Experience',
    components:{
        TextWithIcon,
        Bordered
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