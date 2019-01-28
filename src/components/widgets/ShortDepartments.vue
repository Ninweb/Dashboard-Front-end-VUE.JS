<template lang="pug">
  #departments
    .container#department
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
            p Diseño
            | Gráfico

        .col-md.marketing#box
          .icon-dep
            i.fas.fa-bullhorn
          .info-dep
            p Marketing &
            | Social Media

        .col-md.web#box
          .icon-dep
            i.fas.fa-laptop-code
          .info-dep
            p Desarrollo
            | Web


</template>

<script>
  export default {
    name: 'departments'
  }
</script>

<style lang="scss">
  @import "../../utils/variables.scss";

  #department {

    #box {
      margin: 10px;
      padding: 20px 10px;
      font-size: 20px;
      font-weight: bold;
      height: 100%;
      display: flex;
      cursor: pointer;
      transition: .3s;

      &:hover {
        box-shadow: $shadow-box-deparments;
        transition: .3s;
      }

      .icon-dep {
        font-size: 40px;
        padding-right: 30px;
        padding-left: 10px;
        text-align: center;
      }

      p {
        margin: 0 auto;
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
</style>
