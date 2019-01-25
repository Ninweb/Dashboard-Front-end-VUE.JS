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

      //- Proyectos
      #file3
        #projects
          .title Proyectos recientes

          .project
            p.name Nombre de proyecto
            p.status Status
          
          .project
            p.name Nombre de proyecto
            p.status Status

          .project
            p.name Nombre de proyecto
            p.status Status

      //- Articulos
      #file4 
        #articles
          .title Articulos recientes

          .article
            p.name Nombre de articulo
            //- p.status Status
          
          .article
            p.name Nombre de articulo
            //- p.status Status

          .article
            p.name Nombre de articulo
            //- p.status Status

      //- Tabs
      #file5
        #tabs
          #tabMenu
            .row
              .col-md-4
                p.title Proyectos
              .col-md-4
                p.title Articulos
              .col-md-4
                p.title Grupos de trabajo

          #tabContent
            #projects.row.sections
              .col-md-12
                .project
                  p.name Nombre de proyecto
                  p.status Status
                
                .project
                  p.name Nombre de proyecto
                  p.status Status

                .project
                  p.name Nombre de proyecto
                  p.status Status
            
            #articles.row.sections
              .col-md-12
                .article
                  p.name Nombre de articulo
                  //- p.status Status
                
                .article
                  p.name Nombre de articulo
                  //- p.status Status

                .article
                  p.name Nombre de articulo
                  //- p.status Status
            
            #groups.container.sections
              .row
                .col-md-6.department
                  .human.inside
                    p.title Recursos Humanos
                    p.name Nombre 1 
                    p.name Nombre 2
                    p.name Nombre 3

                .col-md-6.department
                  .design.inside
                    p.title Diseño Gráfico
                    p.name Nombre 4
                    p.name Nombre 5
                    p.name Nombre 6

              .row
                .col-md-6.department
                  .marketing.inside
                    p.title Marketing & Social Media
                    p.name Nombre 7
                    p.name Nombre 8
                    p.name Nombre 9

                .col-md-6.department
                  .web.inside
                    p.title Desarrollo Web
                    p.name Nombre a
                    p.name Nombre b
                    p.name Nombre c 

        //- #tabs2
          b-row
            b-tabs
              b-col
                b-tab(title="Proyectos")
              
              b-col
                b-tab(title="Articulos")

              b-col
                b-tab(title="Grupos de trabajo")


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
          text-align:center;

          img {
            width: 80%;
          }

          #primaryData {
            margin: 30px 0 0 20px;
            text-align: justify;
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

    #file3 {
      margin: 40px auto;

      #projects {
        background: $nin-ligthGrey;
        padding: 20px;

        .title {
          font-weight: bold;
          font-size: 30px;
          margin-bottom: 20px;
        }

        .project {
          margin: 20px auto;

          p {
            margin: 0;
          }

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

    #file4 {
      margin: 40px auto;

      #articles {
        background: $nin-ligthGrey;
        padding: 20px;

        .title {
          font-weight: bold;
          font-size: 30px;
          margin-bottom: 20px;
        }

        .article {
          margin: 20px auto;

          p {
            margin: 0;
          }

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

    #file5 {
      #tabs {
        background: $nin-ligthGrey;
        padding: 20px;

        #tabMenu {
          text-align: center;
          margin-bottom: 20px;

          p {margin: 0}

          .title {
            font-size: 20px;
            font-weight: bold;
          }
        }

        #tabContent {
          p {margin: 0}

          .sections {
            margin: 20px auto;
          }

          #projects {

            .title {
              font-weight: bold;
              font-size: 30px;
              margin-bottom: 20px;
            }

            .project {
              margin: 20px auto;

              p {
                margin: 0;
              }

              .name {
                font-size: 18px;
                font-weight: bold;
              }
              .status {
                font-size: 16px;
              }
            }
          }

          #articles {

            .title {
              font-weight: bold;
              font-size: 30px;
              margin-bottom: 20px;
            }

            .article {
              margin: 20px auto;

              p {
                margin: 0;
              }

              .name {
                font-size: 18px;
                font-weight: bold;
              }
              .status {
                font-size: 16px;
              }
            }
          }

          #groups {
            .department {
              margin: 20px auto;
              // background: grey;
              width: 60%;

              .title {
                font-size: 20px;
                font-weight: bold;
                padding: 10px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .name {
                font-size: 16px;
                padding: 10px;
              }

              .inside {
                width: 60%;
                border: 1px solid black;
                border-radius: 10px;
                margin: 0 auto;
              }

              .human {                
                .title {
                  background: #c0731b;
                  color: $nin-black;
                  // border-radius: 10px 10px 0 0;
                }
              }
              .design {                
                .title {
                  background: #6b1294;
                  color: $nin-white;
                  // border-radius: 10px 10px 0 0;
                }
              }
              .marketing {                
                .title {
                  background: #128512;
                  color: $nin-white;
                  // border-radius: 10px 10px 0 0;
                }
              }
              .web {                
                .title {
                  background: #196ab6;
                  color: $nin-white;
                  // border-radius: 10px 10px 0 0;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
