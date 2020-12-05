<template>
    <div class="container mx-auto mt-5 mb-5">
        <div class="grid grid-cols-3 gap-10 rounded">
            <div class="col-span-3 sm:col-span-2 bg-white shadow-md pt-4">
                <TopBar 
                    tabMargin="ml-5 uppercase font-semibold"
                />

                <About />
                <Skill />
                <ProjectSlider />
                <Certificate />
                <Experience />
                <Education />

            </div>
            <div class="col-span-3 sm:col-span-1">
                <Sidebar />
            </div>
        </div>
    </div>
    
</template>

<script>
    import TopBar from '@/components/molecule/navigation/TopBar'
    import About from '@/components/molecule/profile/About'
    import Skill from '@/components/molecule/profile/Skill'
    import Certificate from '@/components/molecule/profile/Certificate'
    import Experience from '@/components/molecule/profile/Experience'
    import Education from '@/components/molecule/profile/Education'
    import Sidebar from '@/components/molecule/profile/Sidebar'
    import ProjectSlider from '@/components/molecule/profile/ProjectSlide'
  export default {
    name: '',
    components:{
        TopBar,
        About,
        Skill,
        Sidebar,
        Certificate,
        Experience,
        Education,
        ProjectSlider
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