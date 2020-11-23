<template>
    <div class="container mx-auto">
      <div class="py-5">
        <button 
          @click="tab=1" 
          :class="`focus:outline-none bg-none mr-5 text-base sm:text-lg font-semibold  ${tab == 1 ? 'text-gray:800' : 'text-gray-600'}`">
          Description
        </button>
        <button 
          @click="tab=2" 
          :class="`focus:outline-none bg-none mr-5 text-base sm:text-lg font-semibold  ${tab == 2 ? 'text-gray:800' : 'text-gray-600'}`">
          Specification
        </button>
      </div>
    </div>

    <div class="bg-white py-5 border-t">
      <div class="container mx-auto">
        <div class="grid grid-cols-10 gap-2">

          <div class="col-span-10 sm:col-span-8 pr-3">
            <component :is="currentTabComponent"></component>
          </div>

          <div class="col-span-10 sm:col-span-2">
            <div class="pb-5 pt-3 px-3 border border ">
              <p class="font-semibold mb-5 text-sm sm:text-lg">Frequently place together</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Description from '@/components/molecule/detail/Description'
  import Specification from '@/components/molecule/detail/Specification'
  export default {
    name: 'DescriptionSpecification',
    components:{
      Description,
      Specification
    },
    props:{

    },
    data(){
      return{
        tab: 1
      }
    },
    computed:{
      currentTabComponent(){
        return this.tab == 1 ? 'Description' : 'Specification'
      }
    },
    watch:{

    },
    methods:{

    }
  }
</script>