<template lang="pug">
  #menu
    Push(width="300")
      router-link.sidebar(to="/dashboard/admin/create/user", style="text-decoration:none;") Inicio
      router-link.sidebar(to="profile", style="text-decoration:none;") Perfil
      router-link.sidebar(to="departments", style="text-decoration:none;") Departamentos
      router-link.sidebar(to="employees", style="text-decoration:none;") Empleados
</template>

<script>
  import { Slide, Push } from 'vue-burger-menu' 

  export default {
    components: {Slide, Push}
  }
</script>

<style lang="scss">
  @import "../../utils/variables.scss";

  .sidebar {
    color: white;
    text-decoration: none;
    transition: .3s;

    &:hover {
      color: $nin-redDesactivated;
      transition: .3s;
    }
  }

  .bm-burger-bars {
    background-color: $nin-white;
  }

  .bm-burger-button {
    position: relative;
    top: 0px;
  }

  .bm-menu {
    background: $nin-black;
  }

  .bm-cross {
    background: $nin-white;
    width: 20%;
  }
  .bm-cross-button {
    padding-left: 10px;
    padding-top: 5px;
    margin-right: 10px;
  }

  .line-style {
    border-radius: 50px;
    height: 20%;
  }

</style>
