<template>
  <div>
    <!-- <notifications></notifications> -->
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
  // import EventBus from './services/eventBus'
  
  export default {
    methods: {
      disableRTL() {
        if (!this.$rtl.isRTL) {
          this.$rtl.disableRTL();
        }
      },
      toggleNavOpen() {
        let root = document.getElementsByTagName('html')[0];
        root.classList.toggle('nav-open');
      }
    },

    mounted() {
      this.$watch('$route', this.disableRTL, { immediate: true });
      this.$watch('$sidebar.showSidebar', this.toggleNavOpen)
    },

    computed: {
      initStore() {
        return this.$store.state.token
      }
    }
  };
</script>

<style lang="scss"></style>
