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
      <button @click="next" class="next">Next</button>
      <button @click="prev" class="prev">Prev</button>
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
        }
    }
}
</script>

<style>
  .slider {
    position: relative;
    width: 100%;
    height: 550px;
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

</style>