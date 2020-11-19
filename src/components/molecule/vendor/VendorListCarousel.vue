<template>
  <div class="container mx-auto">
       <Carousel
        :items="slides"
      >
      </Carousel>
  </div>
</template>

<script>
import Carousel  from "@/components/atom/carousel/Carousel"
export default {
    components: {
         Carousel,
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