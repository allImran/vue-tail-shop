<template>
  <div class="container mx-auto">
      <!-- <Slider
        :items="slides"
      >
      </Slider>
       -->
       <Carousel
        :items="slides"
      >
      </Carousel>

  </div>
</template>

<script>
import Carousel  from "@/components/atom/carousel/Carousel"
// import Slider  from "@/components/atom/slider/Slider"
export default {
    components: {
        Carousel,
        // Slider
    },
    data() {
        return {
            slides: [
                {id: 1, path: '/images/sliders/01.png', caption: 'lorem ipsum is dummey text content'},
                {id: 2, path: '/images/sliders/02.png', caption: 'lorem ipsum is dummey text content'},
                {id: 3, path: '/images/sliders/03.png', caption: 'lorem ipsum is dummey text content'},
                {id: 4, path: '/images/sliders/03.png', caption: 'lorem ipsum is dummey text content'},
                {id: 5, path: '/images/sliders/03.png', caption: 'lorem ipsum is dummey text content'},
                {id: 5, path: '/images/sliders/03.png', caption: 'lorem ipsum is dummey text content'},
                {id: 6, path: '/images/sliders/03.png', caption: 'lorem ipsum is dummey text content'},
                {id: 7, path: '/images/sliders/03.png', caption: 'lorem ipsum is dummey text content'},
                {id: 8, path: '/images/sliders/03.png', caption: 'lorem ipsum is dummey text content'},
            ],
        }
    } 
}
</script>

<style>

</style>