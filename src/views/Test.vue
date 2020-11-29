<template>
    <div class="p-10 ">
        <p class="text-xl">Requirement</p>
        <p class="text-sm">User fist select the category</p>
        <p class="text-sm">If there is any child category inside the selected category there will be another dopdown with the list of child categories</p>
        <p class="mb-10"></p>
        <select v-model="categoryId" name="" id="">
           <option
           v-for="(item, i) in response"
           :key="i"
           value=""
           >
               {{ item.name }}
           </option>
       </select>
    </div>
   
</template>

<script>
  export default {
    name: 'test',
    components:{

    },
    props:{

    },
    data(){
      return{
        categoryId: '',
        response: [
            {
                id: 1,
                parent_id: null,
                name: 'Parent 1',
                categories:[
                    {
                        id: 3,
                        parent_id: 1,
                        name: 'C1 of P1',
                        categories: [
                            {
                                id: 5,
                                parent_id: 3,
                                name: 'C2 of c1',
                                categories: []
                            },
                            {
                                id: 6,
                                parent_id: 3,
                                name: 'C3 of c1',
                                categories: []
                            }
                            
                        ]
                    },
                    {
                        id: 4,
                        parent_id: 3,
                        name: 'C2 of P1',
                        categories: []
                    },
                ]
            },
            {
                id: 2,
                parent_id: null,
                name: 'Parent 2',
                categories:[]
            },
        ],
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