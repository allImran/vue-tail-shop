<template>
    <div class="px-5 pb-5 mt-5 ">
        <TextWithIcon
            text="Skills"
            textStyle="capitalize text-lg text-blue-600 font-semibold"
            icon="mdi mdi-account"
            iconStyle=" text-xl text-blue-600"
        />
        <div class="px-5 mt-5 pb-10 border-b">
          <div class="flex flex flex-wrap">
            <div
                v-for="(item, i) in skills"
                :key="i"
                class="mr-5 mb-4"
            >
                <div class="flex flex-col items-center">
                    <p class="text-sm text-gray-700 mb-3">{{ item.title }}</p>
                    <CircularProgress :percentage="item.percentage"/>
                </div>
            </div>
          </div>


          <div class="flex mt-3">
              <p
                v-for="(n, i) in 5"
                :key="i"
                class="bg-gray-300 mr-2 font-semibold text-xs text-gray-800 px-3 rounded py-1"
            >
                Skill Set
              </p>
          </div>
        </div>
    </div>
</template>

<script>
import TextWithIcon from '@/components/atom/TextWithIcon'
import CircularProgress from '@/components/atom/CircularProgress'
import {skills} from '@/data/skill'
  export default {
    name: 'Skill',
    components:{
        TextWithIcon,
        CircularProgress
    },
    props:{

    },
    data(){
      return{

      }
    },
    computed:{
        skills() {
            return skills;
        }
    },
    watch:{

    },
    methods:{

    }
  }
</script>

<style>
  
</style>