<template>
    <div class="slides">
        <div class="flex justify-between mb-3">
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
            <Slide
                :style="{width: singleWidth + 'px'}"
                v-for="(slide, i) in slides"
                :key="i"
                :slide="slide.src"
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
  export default {
    name: 'Slider',
    components:{
        Slide,
        NextPrev,
        TextWithIcon
    },
    props:{

    },
    data(){
      return{
            slides : [
                {src: '/images/sliders/01.png'},
                {src: '/images/sliders/02.png'},
                {src: '/images/sliders/03.png'},
                {src: '/images/sliders/02.png'},
                {src: '/images/sliders/01.png'},
                {src: '/images/sliders/02.png'}
            ],
            innerWidht: 1800,
            singleWidth: 600,
            itemsPerSlide: 2,
            currentIndex: 0
      }
    },
    computed:{
        slidesInnerMarginLeft() {
            return this.currentIndex * this.singleWidth
        }
    },
    // created(){
    //     console.log(this.$el.clientWidth)
    //     let singleWidth = this.$el.clientWidth/this.itemsPerSlide;
    //     this.$set('singleWidth', singleWidth);
    //     this.$set('innerWidht', singleWidth * this.slides.length)
    // },
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
        width: 600px;
        overflow: hidden;
        text-align: center;
    }
    .slider-inner{
        transition: margin 0.6s ease-out;
    }
</style>