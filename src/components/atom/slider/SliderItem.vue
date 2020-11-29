<template>
    <transition name="fade">
        <div v-show="visibleSlide === index" class="slider-item">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        visibleSlide: {
            type: Number,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
    }
}
</script>

<style>
.slider-item {
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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