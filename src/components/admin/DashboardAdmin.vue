<template lang="pug">
  #dashAdmin
    header-admin

    //- Record del usuario y departamentos
    .container
      #file1
        .row
          #record.col-md-6
            .row
              #col1.col-md-6
                img(src='../../assets/default-profile-pic.png')
                #primaryData
                  p
                    b Nombre:
                    |  prueba
                  p
                    b Apellido:
                  p
                    b Cargo:

              #col2.col-md-6
                #secondaryData
                  p
                    b Status:
                  p
                    b Departamento:

          #department.col-md-6
            .row.align-items-center
              #dep.col-md-6
                ul
                  li#box.human
                    p Recursos humanos
                  li#box.design.prov
                    p Diseño gráfico


              #dep.col-md-6
                ul
                  li#box.marketing
                    p Marketing & Social Media
                  li#box.web.prov
                    p Desarrollo Web

      //- Gerentes de departamentos
      #file2
        .row
          .col-md-3.subboss
              img(src='../../assets/default-profile-pic.png')
              #data
                p Nombre
                p Gerente del Departamento

          .col-md-3.subboss
              img(src='../../assets/default-profile-pic.png')
              #data
                p Nombre
                p Gerente del Departamento

          .col-md-3.subboss
              img(src='../../assets/default-profile-pic.png')
              #data
                p Nombre
                p Gerente del Departamento

          .col-md-3.subboss
              img(src='../../assets/default-profile-pic.png')
              #data
                p Nombre
                p Gerente del Departamento

      //- Grupos de trabajo
      #file3
        .row
          .col-md-3
</template>

<script>
  import HeaderAdmin from '../layouts/HeaderAdmin.vue'

  export default {
    components: {HeaderAdmin}
  }
</script>

<style lang="scss">
  @import "../../utils/variables.scss";

  #dashAdmin {
    #file1 {
      margin: 20px auto;

      #record {
        // border-radius: 20px;
        background: $nin-ligthGrey;
        padding: 10px;
        margin: 0;

        #col1 {
          // border-right: 2px solid $nin-black;

          img {
            width: 80%;
          }

          #primaryData {
            margin: 30px 0 0 20px;
          }
        }
      }

      #department {
        padding: 20px;

        ul {
          padding: 0;

          li {
            list-style: none;
            // border-radius: 10px;
            margin-bottom: 10px;
            background: $nin-ligthGrey;
            font-size: 15px;
            height: 100%;
            text-align:center;
            padding-top: 50px;
            padding-bottom: 50px;

            p {
              margin: 0;
              padding: 10px;
            }

            .prov {
              margin-top: 80px;
            }
          }

        }
      }
    }

    #file2 {
      margin-top: 40px;
      margin-bottom: 40px;
      .subboss {
        display: flex;
        font-size: 12px;

        p {
          margin: 0;
        }

        #data {
          padding: 15px 0 0 5px;
        }

        img {
          width: 70px;
          height: 70px;
        }
      }
    }


  }
</style>
