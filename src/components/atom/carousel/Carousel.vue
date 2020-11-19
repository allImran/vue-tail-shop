<template>
  <div class="carousel flex">
       <transition-group name="left">
         <template
            v-for="(item, index) in records"
            :key="index">
            <div v-if="onCheck(index)" class="w-1/3 bg-gray-500 h-12" >
              {{ item.id }}

                  <!-- <CarouselItem
                    :index="index"
                    :visibleSlide="visibleSlide"
                    >
                      <img :src="item.path" />
                </CarouselItem> -->
            </div>
        </template>
       </transition-group>
      <button @click="next" class="next">Next</button>
      <button @click="prev" class="prev">Prev</button>
  </div>
</template>

<script>
// import CarouselItem  from "@/components/atom/carousel/CarouselItem"
export default {
  components: {
    //  CarouselItem,
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      visibleSlide: 0,
      currentIndex: 3,
      start: 0,
      end: 4,
    }
  },
  computed: {
        slidesLen() {
            return this.items.length;
        },
        records() {
          return this.items.slice(this.start, this.end);
        }
    },
    methods: {
        onCheck(index) {
            if(index > this.currentIndex) {
              this.start++
            }
            return this.currentIndex > index
        },
        next() {
          this.currentIndex++;
           this.start = this.end;
           this.end = this.end + 3;
        },
        prev() {
          this.currentIndex--;
           this.end = this.start;
           this.start = this.start - 3;
        }
    }
}
</script>

<style>
  .carousel {
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

.left-enter-active {
    animation: leftInAnimation 0.4s ease-in-out;
}

.left-leave-active {
    animation: leftOutAnimation 0.4s ease-in-out;
}

@keyframes leftInAnimation {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
}

@keyframes leftOutAnimation {
    from { transform: translateX(0); }
    to { transform: translateX(100%); }
}
</style>