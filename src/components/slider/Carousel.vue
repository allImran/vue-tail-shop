<template>
    <div class="slides px-3 relative bg-white">
        <span 
            @click="gotoPrev"
            class="left-arrow" 
            :class="leftArrowClasses"
        > 
            {{ leftIcon }}
        </span>
        <span
            class="right-arrow"
            @click="gotoNext" 
            :class="rightArrowClasses"
        >
            {{ rightIcon }}
        </span>

        <div ref="wrapper" class="flex justify-between mb-3">
            <slot name="top"></slot>
            <!-- <NextPrev
                customeClass="flex"
                @next="gotoNext"
                @prev="gotoPrev"
            /> -->


        </div>
        <div class="sideNav">
            
        </div>
        <div
            :style="{width: innerWidht + 'px', marginLeft: '-' + slidesInnerMarginLeft + 'px'}"
            class="slider-inner  flex"
        >
        <div 
            :style="{width: singleWidth + 'px'}"
            :class="singleSlideStyle" 
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
    // import NextPrev from '@/components/atom/NextPrev';
  export default {
    name: 'Carousel',
    components:{
        // NextPrev,
        // TextWithIcon,
    },
    props: {
        responsive: {
            default: [
                {
                    width: 0,
                    item: 1
                },{
                    width: 768,
                    item: 2
                },{
                    width: 1024,
                    item: 3
                },{
                    width: 1280,
                    item: 4
                },
            ]
        },
        slides: {
            required: true,
            type: Array
        },
        singleSlideStyle:{
            type: String,
            default: 'border-4 border-transparent'
        },
        leftIcon: {
            default: '<'
        },
        rightIcon: {
            default: '>'
        },
        leftArrowClasses: {
            type: String,
            default: 'rounded-l border text-gray-600 font-semibold px-1 pointer'
        },
        rightArrowClasses: {
            type: String,
            default: 'rounded-r border text-gray-600 font-semibold px-1 pointer'
        }
    },
    data(){
      return{
        itemsPerSlide: 0,
        innerWidht: 0,
        singleWidth: 0,
        currentIndex: 0,
      }
    },
    
    computed:{
        slidesInnerMarginLeft() {
            return this.currentIndex * this.singleWidth;
        },
    },
    
    mounted(){
        let diviceWidth= this.$refs.wrapper.clientWidth;
        
        for(var i=0; i<this.responsive.length; i++){
             if(diviceWidth > this.responsive[i].width){
                this.itemsPerSlide = this.responsive[i].item;
            }
        }
        
        let singleWidth = diviceWidth/this.itemsPerSlide;
        this.singleWidth = singleWidth;
        this.innerWidht =  singleWidth * this.slides.length;

    },
    methods:{
        gotoPrev() {
            if(this.currentIndex == 0) {
                return
            }
            this.currentIndex = this.currentIndex - 1
        },

        gotoNext() {
            if(this.currentIndex >= this.slides.length - this.itemsPerSlide) {
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
        overflow: hidden;
    }

    .slider-inner{
        transition: margin 0.6s ease-out;
    }

</style>