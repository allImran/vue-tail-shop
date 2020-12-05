<template>
    <div class="slides mx-5 border-b pb-5">
        <div ref="slider_wrapper" class="flex justify-between mb-3">
            <TextWithIcon 
				text="Education"
				textStyle="capitalize text-lg text-blue-600 font-semibold"
				icon="mdi mdi-account"
				iconStyle=" text-xl text-blue-600"
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
            <Slide
                :style="{width: singleWidth + 'px'}"
                v-for="(slide, i) in slides"
                :key="i"
                :slide="slide.img"
            />
        </div>
        <!-- <div class="navigation">
            <span @click="gotoPrev">Prev</span>
            <span @click="gotoIndex(i)" class="nav-number" :key="i" v-for="(slide, i) in slides">{{ i +  1 }}</span>
            <span @click="gotoNext">Next</span>
        </div> -->
    </div>
</template>

<script>
    import Slide from '@/components/slider/Slide.vue';
    import NextPrev from '@/components/atom/NextPrev';
    import TextWithIcon from '@/components/atom/TextWithIcon';
    import {slides} from '@/data/slide.js'
  export default {
    name: 'ProjectSlider',
    components:{
        Slide,
        NextPrev,
        TextWithIcon
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
        slides() {
            return slides;
        }
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