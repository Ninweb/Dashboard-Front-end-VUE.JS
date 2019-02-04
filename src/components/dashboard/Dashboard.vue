<template lang="pug">
  #dashAdmin
    #header
      header-component

    router-view

    //- main-component

    //- full-list-employees

    //- create-user-form


</template>

<script>
  import HeaderComponent from './header/Header.vue'
  // import MainComponent from '../main/Main.vue'

  export default {
    data() {
      return {
        usuarioLogeado: ''
      }
    },
    components: {
      HeaderComponent,
      // MainComponent
    },
    mounted () {
      let token = localStorage.getItem('token');
      let usuarioLogeado = localStorage.getItem('usuarioLogeado');

      this.usuarioLogeado = usuarioLogeado;
      console.log(JSON.parse(usuarioLogeado));
      console.log(token);
    }
  }
</script>

<style lang="scss">
  @import "../../utils/variables.scss";

  #dashAdmin {

    .main-container {
      margin-top: -30px;
      height: 100vh;
    }
  }
</style>
