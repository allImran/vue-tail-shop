<template>
    <p class="text-sm text-gray-600 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos nihil at repellendus itaque beatae quidem, blanditiis quasi tenetur veniam quos. Ut, dolor, quis. Sunt, perspiciatis. Suscipit corrupti, id vel Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos nihil at repellendus itaque beatae quidem, blanditiis quasi tenetur veniam quos.</p>

    <p class="text-sm text-gray-600 mb-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab architecto molestiae aliquam, reiciendis voluptatum reprehenderit neque! Laboriosam deleniti, corporis officiis ab voluptate cumque error eos quod laborum sapiente delectus in!
    </p>

    <p class="text-semibold mb-3 font-semibold">Details:</p>
    <ul>
        <li
            class="text-sm text-gray-600"
            v-for="(n, i) in 6" 
            :key="i"
        >
            This is subtitle Or other text
        </li>
    </ul>
</template>

<script>
  export default {
    name: 'Description',
    components:{

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