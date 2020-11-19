<template>
 <div class="container mx-auto">
   <Slider
        :items="slides"
        :dots="true"
    >
    </Slider>
    
 </div>
</template>

<script>
import Slider  from "@/components/atom/slider/Slider"
export default {
    components: {
        Slider
    },
    data() {
        return {
            slides: [
                {id: 1, path: '/images/sliders/01.png', caption: 'lorem ipsum is dummey text content'},
                {id: 2, path: '/images/sliders/02.png', caption: 'lorem ipsum is dummey text content'},
                {id: 3, path: '/images/sliders/03.png', caption: 'lorem ipsum is dummey text content'},
            ],
        }
    }
}
</script>