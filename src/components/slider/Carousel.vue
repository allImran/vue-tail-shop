<template>
  <div class="slides">
    <div ref="wrapper" class="flex justify-between mb-3">
      <TextWithIcon
          :icon="headerIcon"
          :text="headerText"
          :class="headerTextStyle"
      />
      <NextPrev
          customeClass="flex"
          @next="gotoNext"
          @prev="gotoPrev"
      />
    </div>
    <div
        :style="{width: innerWidht + 'px', marginLeft: '-' + slidesInnerMarginLeft + 'px'}"
        class="slider-inner flex"
    >
      <div
          :style="{width: singleWidth + 'px'}"
          class="border-4 border-transparent"
          v-for="(slide, i) in slides"
          :key="i"
      >
        <slot :slide="slide"></slot>
      </div>

    </div>
    <!--  <div class="navigation">
         <span @click="gotoPrev">Prev</span>
         <span @click="gotoIndex(i)" class="nav-number" :key="i" v-for="(slide, i) in slides">{{ i +  1 }}</span>
         <span @click="gotoNext">Next</span>
     </div> -->
  </div>
</template>

<script>
import NextPrev from '@/components/atom/NextPrev';
import TextWithIcon from '@/components/atom/TextWithIcon';

export default {
  name: 'Slider',
  components: {
    NextPrev,
    TextWithIcon,
  },
  props: {
    slides: {
      required: true,
      type: Array
    },
    headerText:{
      default:'Header Text'
    },
    headerTextStyle:{
      default:'text-gray-700 text-xl font-bold mt-5 mb-3 capitalize'
    },
    headerIcon:{
      default:''
    },
    responsive:{
      type:Object,
      required: true,
    }

  },
  data() {
    return {
      itemsPerSlide: 0,
      innerWidht: 0,
      singleWidth: 0,
      currentIndex: 0,
    }
  },

  computed: {
    slidesInnerMarginLeft() {
      return this.currentIndex * this.singleWidth;
    },

  },
  mounted() {
    let diviceWidth = this.$refs.wrapper.clientWidth;

    for (var i = 0; i < this.responsive.length; i++) {
      if (diviceWidth > this.responsive[i].width) {
        this.itemsPerSlide = this.responsive[i].item;
      }
    }

    let singleWidth = diviceWidth / this.itemsPerSlide;
    this.singleWidth = singleWidth;
    this.innerWidht = singleWidth * this.slides.length;

  },
  methods: {
    gotoPrev() {
      if (this.currentIndex == 0) {
        return
      }
      this.currentIndex--
    },
    gotoNext() {
      if (this.currentIndex == this.slides.length - 4) {
        return
      }
      this.currentIndex++
    },
    gotoIndex(i) {
      this.currentIndex = i + 2;
    }
  }
}
</script>

<style>
.slides {
  overflow: hidden;
}

.slider-inner {
  transition: margin 0.6s ease-out;
}
</style>