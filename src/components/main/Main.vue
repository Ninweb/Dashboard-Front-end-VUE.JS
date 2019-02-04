<template lang="pug">
  #dashAdmin
    .container.main-container
      h1(v-model="usuarioLogeado") {{  }}
      
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
  import ShortDepartments from '../widgets/ShortDepartments.vue'
  import ShortProfile from '../profile/ShortProfile.vue'
  import CarouselEmployees from '../widgets/CarouselEmployees.vue'
  import ShortProjects from '../projects/ShortProjects.vue'
  import FullListEmployees from '../widgets/FullListEmployees.vue'
  import CreateUserForm from '../forms/CreateUser.vue'

  export default {
    components: {
      ShortDepartments,
      ShortProfile,
      CarouselEmployees,
      ShortProjects,
      FullListEmployees,
      CreateUserForm
    },
    data() {
      return {
        usuarioLogeado: JSON.parse(localStorage.getItem('usuarioLogeado')),
        token : localStorage.getItem('token'),
        empleado: '',
        id_persona : ''
      }
    },
    methods: {

    },
    created (){
        console.log(this.usuarioLogeado);
        /*et id_usuario = this.usuarioLogeado.usuario.id;
      //BUSCANDO INFORMACIÓN DEL EMPLEADO
        this.$http.get('http://localhost:8000/api/usuario/empleados/'+id_usuario,this.usuarioLogeado)
          .then(response => { 
            this.empleado = response.body[0];
            localStorage.setItem('empleado',this.empleado);
            this.id_persona = this.empleado.id_persona;
            //console.log(this.usuarioLogeado);
            let usuarioLogeado2 = {
              "status": this.usuarioLogeado.status,
              "usuario":this.usuarioLogeado.usuario
            }
            this.$http.get('http://localhost:8000/api/personas/'+this.id_persona,this.usuarioLogeado2)
              .then(response => {
                  console.log(response);
              })
            //console.log(this.id_persona);
            //console.log(this.empleado);
          })
          .catch(error => {
              console.log(error)
          });*/
    },
    computed:{//metodos computados los cuales se ejecutan en segundo plano
      
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
