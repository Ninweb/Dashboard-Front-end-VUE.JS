<template lang="pug">
  #shortProjects
    #projects
      .title Proyectos recientes

      .project
        p.name Nombre de proyecto
        p.status Status

      .project
        p.name Nombre de proyecto
        p.status Status

</template>

<script>
  export default {
    name: 'short-projects'
  }
</script>


<style lang="scss">
  @import "../../utils/variables.scss";

  #shortProjects {
    // height: 100%;
    margin: 5% auto;

    p {margin: 0;}

    #projects {
      background: $nin-white;
      box-shadow: $shadow-box-shortElement;

      .title {
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 20px;
        color: $nin-white;
        padding: 10px;
        margin: 0;
        width: 100%;
        background: $nin-redDesactivated;
      }

      .project {
        margin: 20px auto;
        padding: 10px;

        .name {
          font-size: 18px;
          font-weight: bold;
        }
        .status {
          font-size: 16px;
        }
      }
    }
  }
</style>
