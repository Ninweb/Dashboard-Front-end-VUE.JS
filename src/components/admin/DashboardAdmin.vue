<template lang="pug">
  #dashAdmin
    header-admin
     
    .container#main-container
      h1(v-model="usuarioLogeado") {{ usuar }}
      short-departments

      .row
        .col-md-6
          short-profile

        .col-md-6
          short-projects

      carousel-employees

    //- full-list-employees

    //- create-user-form


</template>

<script>
  import HeaderAdmin from '../layouts/HeaderAdmin.vue'
  import ShortDepartments from '../widgets/ShortDepartments.vue'
  import ShortProfile from '../profile/ShortProfile.vue'
  import CarouselEmployees from '../widgets/CarouselEmployees.vue'
  import ShortProjects from '../projects/ShortProjects.vue'
  import FullListEmployees from '../widgets/FullListEmployees.vue'
  import CreateUserForm from '../forms/CreateUser.vue'

  export default {
    data() {
      return {
        usuarioLogeado: ''
      }
    },
    components: {
      HeaderAdmin,
      ShortDepartments,
      ShortProfile,
      CarouselEmployees,
      ShortProjects,
      FullListEmployees,
      CreateUserForm
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

    #main-container {
      margin-top: -30px;
    }
  }
</style>
