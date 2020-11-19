<template>
  <div class="slider">
        <SliderItem
            v-for="(item, index) in items"
            :key="item.id"
            :index="index"
            :visibleSlide="visibleSlide"
            >
              <img :src="item.path" />
        </SliderItem>
      <button v-show="nav" @click="next" class="next">Next</button>
      <button v-show="nav" @click="prev" class="prev">Prev</button>
      <div v-show="dots" class="dot-area">
        <u class="m-0 flex">
          <li 
            v-for="(item, index) in items"
            :key="index"
            class="dot-item"
            @click="activeSlideItem(index)"
            :class="{'active': visibleSlide == index }"
          ></li>
        </u>
      </div>
  </div>
</template>

<script>
import SliderItem  from "@/components/atom/slider/SliderItem"
export default {
  components: {
     SliderItem,
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    dots: {
      type: Boolean,
      default: () => true
    },
    nav: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      visibleSlide: 0
    }
  },
  computed: {
        slidesLen() {
            return this.items.length;
        }
    },
    methods: {
        next() {
            if(this.visibleSlide >= this.slidesLen - 1) {
                this.visibleSlide = 0;
            }else {
                this.visibleSlide++;
            }
        },
        prev() {
            if(this.visibleSlide <= 0) {
                this.visibleSlide = this.slidesLen - 1;
            }else {
                this.visibleSlide--;
            }
        },
        activeSlideItem(index) {
          this.visibleSlide = index;
        }
    }
}
</script>

<style>
  .slider {
    position: relative;
    width: 100%;
    height: 504px;
    overflow: hidden;
  }

  button.next, button.prev {
    position: absolute;
    height: 40px;
    width: 50px;
    top: calc(50% - 20px);
    background-color: rgba(0,0,0, .8);
    border: none;
    color: #fff;
  }

  button:focus, button:hover {
    outline: none;
    cursor: pointer;
  }
  .next {
    right: 0;
  }
  .left {
    left: 0;
  }

  .dot-area {
    position: absolute;
    bottom: 15px;
    left: 15px;
  }
  .dot-item {
    list-style: none;
    width: 12px;
    height: 12px;
    background: #EFEFEF;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;
  }
  .dot-item.active {
    background: #CECECE;
  }
</style>