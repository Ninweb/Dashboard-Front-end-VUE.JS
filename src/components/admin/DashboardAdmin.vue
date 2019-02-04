<template lang="pug">
  #dashAdmin
    #header
      header-admin

    .container.main-container#page-wrap
      h1(v-model="usuarioLogeado")
      
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
  import axios from 'axios';

  export default {
    components: {
      HeaderAdmin,
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
        persona:'',
        id_persona : ''
      }
    },
    created: function(){
      this.getEmpleado();
      this.getPersona();
    },
    methods: {
      async getEmpleado(){
        let id_usuario = this.usuarioLogeado.usuario.id;
      //BUSCANDO INFORMACIÓN DEL EMPLEADO
      
        await axios.get('http://localhost:8000/api/usuario/empleados/'+id_usuario,this.usuarioLogeado)
          .then(  (response) => { 
            this.empleado = response.data;
            this.id_persona = this.empleado.id_persona;
            console.log(this.empleado)
          })
          .catch(error => {
              console.log(error)
          });
      },  
      async getPersona(){
        await axios.get('http://localhost:8000/api/personas/'+this.id_persona)
          .then(  (response) => { 
            this.empleado = response.data;
            console.log(this.empleado)
          })
          .catch(error => {
              console.log(error)
          });
      }
    
    },
    mounted (){
        
          
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
