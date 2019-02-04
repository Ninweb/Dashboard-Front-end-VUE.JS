<template lang="pug">
  #app
    router-view
</template>

<script>

export default {
  name: 'app',
}

</script>

<style lang="scss">
@import "./utils/variables.scss";

#app {
  font-family: 'Open Sans', sans-serif;
  background: $nin-white;
  padding-left:0px;
}
</style>
