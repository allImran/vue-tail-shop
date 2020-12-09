<template>
  project slider
</template>

<script>
export default {
  name: 'ProjectSlider',
  components:{
  },
  props: {
    itemsPerSlide: {
      default: 2
    }
  },
  data(){
    return{
      innerWidht: 0,
      singleWidth: 0,
      currentIndex: 0
    }
  },

  computed:{
    slidesInnerMarginLeft() {
      return this.currentIndex * this.singleWidth
    },

  },
  mounted(){
    let singleWidth = this.$refs.slider_wrapper.clientWidth/this.itemsPerSlide;
    this.singleWidth = singleWidth;
    this.innerWidht =  singleWidth * this.slides.length;
  },
  methods:{
    gotoPrev() {
      if(this.currentIndex == 0) {
        return
      }
      this.currentIndex--
    },
    gotoNext() {
      if(this.currentIndex == this.slides.length - 4) {
        return
      }
      this.currentIndex++
    },
    gotoIndex(i){
      this.currentIndex = i+2;
    }
  }
}
</script>

<style>
.slides{
  /*width: 600px;*/
  overflow: hidden;
}
.slider-inner{
  transition: margin 0.6s ease-out;
}
</style>