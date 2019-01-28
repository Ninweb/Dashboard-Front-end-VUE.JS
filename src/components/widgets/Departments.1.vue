<template lang="pug">
  #departments
    .container
        #department
          #box.human
            p Recursos Humanos

          #box.design.prov
            p Diseño Gráfico

          #box.marketing
            p Marketing & Social Media

          #box.web.prov
            p Desarrollo Web

        #department

</template>

<script>
  export default {
    name: 'departments'
  }
</script>

<style lang="scss">
  @import "../../utils/variables.scss";

  #department {
    margin: 7% auto;

    #box {
      margin: 10px;
      font-size: 20px;
      font-weight: bold;
      height: 100%;
      // padding: 10px 10px;

      p {
        margin: 0;
        padding: 20px;
        transition: .3s;

        &:hover {
          background: $transparent-hover;
          box-shadow: $shadow-box-deparments;
          transition: .3s;
          color: white;
          cursor: pointer;
        }
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
