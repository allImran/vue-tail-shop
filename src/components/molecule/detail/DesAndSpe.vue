<template>
    <div class="container mx-auto">
      <div class="py-5">
        <button 
          @click="tab=1" 
          :class="`focus:outline-none bg-none mr-5 text-lg font-semibold  ${tab == 1 ? 'text-gray:800' : 'text-gray-600'}`">
          Description
        </button>
        <button 
          @click="tab=2" 
          :class="`focus:outline-none bg-none mr-5 text-lg font-semibold  ${tab == 2 ? 'text-gray:800' : 'text-gray-600'}`">
          Specification
        </button>
      </div>
    </div>

    <div class="bg-white py-5 border-t">
      <div class="container mx-auto">
        <div class="grid grid-cols-10 gap-2">
          <div class="col-span-8 pr-3">
            <component :is="currentTabComponent"></component>
          </div>
          <div class="col-span-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perferendis debitis eius nemo adipisci et ad officia, iusto, corrupti numquam? Expedita quia repellendus incidunt quae laboriosam fugit! At, nihil, amet.
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