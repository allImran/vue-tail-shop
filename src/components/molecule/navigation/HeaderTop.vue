<template>
  <div class="text-xs marquee">
    <p class="truncate">
      <a class="mr-5" href="">**Sign up: Register to get the best offer</a>
      <a class="mr-5" href="">**Sign up: Register to get the best offer</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop'
}
</script>

<style>
.marquee {
  overflow: hidden;
  padding: .1rem;
}

.marquee p {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 25s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>