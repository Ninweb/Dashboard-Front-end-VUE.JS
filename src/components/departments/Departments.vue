<template lang="pug">
  #mainDepartments 
    .departments.container#wrap
      .row
        .col-md.human#box
          .icon-dep
            i.fas.fa-user-circle
          .info-dep
            p Gerencia General

        .col-md.design#box
          .icon-dep
            i.fas.fa-drafting-compass
          .info-dep
            p Diseño Gráfico

      .row
        .col-md.marketing#box
          .icon-dep
            i.fas.fa-bullhorn
          .info-dep
            p Community Manager

        .col-md.web#box
          .icon-dep
            i.fas.fa-laptop-code
          .info-dep
            p Desarrollo Web
</template>

<script>
  // import HeaderAdmin from '../layouts/HeaderAdmin.vue'

  export default {
    // components: {HeaderAdmin}  
  }
</script>

<style lang="scss">
  @import "../../utils/variables.scss";

  #mainDepartments {
    height: 100vh;

    .departments {
      width: 80%;

      #box {
        margin: 10px;
        padding: 30px 10px;
        font-size: 30px;
        height: inherit;
        cursor: pointer;
        transition: .3s;
        text-align: center;
        font-weight: bold;

        &:hover {
          box-shadow: $shadow-box-deparments;
          transition: .3s;
          font-weight: bold;
        }

        .icon-dep {
          font-size: 40px;
          padding-right: 30px;
          padding-left: 10px;
          text-align: center;
        }

        p {
          margin: 0 auto;
          // padding: 20px 0;
        }
      }

      .human {
        background: $gradient-human-department;
        color: $nin-white;
      }
      .design {
        background: $gradient-design-department;
        color: $nin-white;
      }
      .marketing {
        background: $gradient-marketing-department;
        color: $nin-white;
      }
      .web {
        background: $gradient-web-department;
        color: $nin-white;
      }
    }
  }

  
</style>
