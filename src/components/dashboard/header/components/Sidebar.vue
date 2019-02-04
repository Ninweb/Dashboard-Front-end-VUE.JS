<template lang="pug">
  #sidebarMenu
    #profile
      #pic
        img(src="../../../../assets/default-profile-pic.png")
      #data
        p Nombre
      #logout
        //- i.fas.fa-sign-out-alt
        p Cerrar sesión

    #navigation
      router-link.opcion(:to={ name: 'main-view' }, style="text-decoration:none;") 
        i.fas.fa-home
        p Dashboard
      router-link.opcion(:to={ name: 'profile' }, style="text-decoration:none;") 
        i.fas.fa-user-circle 
        p Perfil
      router-link.opcion(:to={ name: 'departments' }, style="text-decoration:none;") 
        i.fas.fa-building
        p Departamentos
      router-link.opcion(:to={ name: 'employees' }, style="text-decoration:none;") 
        i.fas.fa-users 
        p Empleados


</template>

<script>
  import $ from 'jquery' 
  import menu from '../menu'
</script>

<style lang="scss">
  @import "../../../../utils/variables.scss";

  p {margin:0}

  #sidebarMenu {
    background: $nin-black;
    position: fixed;
    z-index: 10;
    width: 20%;
    top: 0;
    left: -210px;
    height: 100%;

    #profile {
      background: $nin-grey;
      text-align: center;
      padding: 20px 10px;

      #pic {
        img {
          width: 50%;
        }
      }

      #data {
        margin: 10px 0;
      }

      #logout {
        display: flex;
        cursor: pointer;
        padding-top: 10px;
        border-top: 1px solid white;

        i {
          padding-top: 5px;
          width: 20%;
          text-align: right;
        }

        p {
          width: 100%;
        }
      }
    }

    #navigation {
      .opcion {
        display: flex;
        padding: 10px 50px;
        color: white;
        font-size: $menu-fontSize;
        transition: .2s;
        padding: 20px 10px;

        i {
          width: 20%;
          padding-top: 3px;
          
        }

        p {
          width: 100%;
          margin: 0;
        }

        &:hover {
          // color: $nin-redDesactivated;
          background: $nin-grey;
          transition: .2s;
          font-weight: bold;
        }
      } 
    }
  }

</style>
