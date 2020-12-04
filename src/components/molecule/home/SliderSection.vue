<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-12 gap-2">

      <div class="col-span-12 md:col-span-9">

        <Slider
            :items="slides"
            :dots="true"
        >
        </Slider>

        <div class="flex justify-between">

          <img class="hidden md:block  w-1/4 mt-5 object-fill" src="/images/add.jpg" alt="" />

          <img class="hidden md:block  w-3/4	pl-2 mt-5 object-fill" src="/images/add.jpg" alt="" />

        </div>
      </div>

      <div class="hidden md:block md:col-span-3">
        <div class="flex flex-col">
          <img class="mb-4 w-full object-fill" style="height: 235px;" src="/images/sliders/box/1.png" alt="">
          <img class="w-full object-fill" style="height: 235px;" src="/images/sliders/box/2.png" alt="">
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Slider from "@/components/atom/slider/Slider"

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