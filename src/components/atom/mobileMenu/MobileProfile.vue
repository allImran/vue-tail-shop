<template>
  <div class="origin-top-right absolute shadow shadow-lg">
    <div class="w-full bg-indigo-200 p-4">

      <ul>
        <li class="hover:text-white">
          <router-link to="/">
            Dashboard
          </router-link>
        </li>

        <li class="hover:text-white">
          <router-link to="/profile">
            Profile
          </router-link>
        </li>

        <li class="hover:text-white">
          <router-link to="/">
            Sign Out
          </router-link>
        </li>

      </ul>
    </div>

  </div>
</template>

<script>


export default {
  name: 'MobileProfile',
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>