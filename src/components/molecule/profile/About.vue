<template>
    <div class="px-5 pb-5 mt-5">
        <TextWithIcon 
            text="short bio"
            textStyle="capitalize text-lg text-blue-600 font-semibold"
            icon="mdi mdi-account"
            iconStyle=" text-xl text-blue-600"
        />
        <div class="pl-5 mt-3 border-b pb-10">
            <p class="text-sm font-semibold text-gray-600"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ab, accusantium eaque soluta quos, reiciendis qui officia labore repellat dignissimos saepe cumque ex repellendus quis iste eveniet ipsumae excepturi consectetur ea dolore necessitatibus illo possimus quia. Mollitia unde maiores facilis adipisci placeat. </p>

            <p class="text-sm font-semibold text-gray-600 mt-3"> Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Distinctio reiciendis aut, facilis reprehenderit libero labore excepturi possimus ullam accusamus. Nisi amet sint adipisci odio, ab voluptates quasi animi accusantium inventore.    </p>
        </div>  
    </div>
</template>

<script>
    import TextWithIcon from '@/components/atom/TextWithIcon'
  export default {
    name: 'About',
    components:{
        TextWithIcon
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