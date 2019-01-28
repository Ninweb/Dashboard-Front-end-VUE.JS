<template lang="pug">
  #app
    router-view
</template>

<script>
import HeaderUser from './components/layouts/HeaderUser.vue'

export default {
  name: 'app',
}
</script>

<style lang="scss">
@import "./utils/variables.scss";

#app {
  font-family: 'Open Sans', sans-serif;
  background: $nin-white;
}
</style>
