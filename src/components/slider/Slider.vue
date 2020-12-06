<template>
    <div class="slides">
        <div ref="wrapper" class="flex justify-between mb-3">
            <TextWithIcon 
                icon="mdi mdi-home"
                text="Our Project"
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
        <slide 
            v-slot="slide"
            :style="{width: singleWidth + 'px'}"
            v-for="(slide, i) in slides"
            :key="i"
            :slide="slide.img"
        >
        {{ slide.slide }}
           <GradientCard
                :image="slide.slide"
            />
        </slide>
            
        </div>
        <!-- <div class="navigation">
            <span @click="gotoPrev">Prev</span>
            <span @click="gotoIndex(i)" class="nav-number" :key="i" v-for="(slide, i) in slides">{{ i +  1 }}</span>
            <span @click="gotoNext">Next</span>
        </div> -->
    </div>
</template>

<script>
    import GradientCard from '@/components/atom/GradientCard'
    import Slide from '@/components/slider/Slide.vue';
    import NextPrev from '@/components/atom/NextPrev';
    import TextWithIcon from '@/components/atom/TextWithIcon';
    import {slides} from '@/data/slide.js'
  export default {
    name: 'Slider',
    components:{
        Slide,
        NextPrev,
        TextWithIcon,
        GradientCard
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
            currentIndex: 0,
            responsive: [
                {
                    width: 900,
                    item: 3
                },{
                    width: 600,
                    item: 2
                },{
                    width: 500,
                    item: 1
                },
            ]
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
        let diviceWidth= this.$refs.wrapper.clientWidth;
        // this.responsive.forEach((item) => {
        //     if(diviceWidth > item.width){
        //         this.itemsPerSlide = item.item
        //     }
        // });
        let singleWidth = diviceWidth/this.itemsPerSlide;
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