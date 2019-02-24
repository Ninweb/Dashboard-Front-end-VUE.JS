<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" :name="$t('Resumen')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/notifications" :name="$t('Notificaciones')" icon="tim-icons icon-bell-55"/>
        <sidebar-link to="/dashboard/profile" :name="$t('Mi perfil')" icon="tim-icons icon-single-02"/>
        <sidebar-link to="/dashboard/departamentos" :name="$t('Departamentos')" icon="tim-icons icon-vector"/>
        <sidebar-link to="/dashboard/empleados" :name="$t('Empleados')" icon="tim-icons icon-satisfied"/>
        <sidebar-link to="/" :name="$t('Proyectos')" icon="tim-icons icon-sound-wave"/>
        <!-- <sidebar-link to="/maps" :name="$t('Clientes')" icon="tim-icons icon-world"/> -->
        <!-- <sidebar-link to="/table-list" :name="$t('Mis dominios')" icon="tim-icons icon-puzzle-10"/> -->
        <sidebar-link to="/login" :name="$t('Cerrar Sesión')" icon="tim-icons icon-simple-remove"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <!-- <router-view/> -->
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">
      <router-view></router-view>
      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
