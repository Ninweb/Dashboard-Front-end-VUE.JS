<template lang="pug">
  #dashAdmin
    #header
      header-admin

    .container.main-container#page-wrap
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
    components: {
      HeaderAdmin,
      ShortDepartments,
      ShortProfile,
      CarouselEmployees,
      ShortProjects,
      FullListEmployees,
      CreateUserForm
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
