<template>
    <card type="user">
      <p class="card-text">
      </p>
      <div class="author">
        <div class="block block-one prueba2"></div>
        <div class="block block-two prueba2"></div>
        <div class="block block-three prueba2"></div>
        <div class="block block-four prueba2"></div>
        <a href="#">
          <img class="avatar prueba6" src="img/gabriel.jpg" alt="...">
          <h4 class="title">{{persona.nombre +' '+ persona.apellido}}</h4>
        </a>
        <p class="description">
          <strong>Cargo: </strong>{{empleado.descripcion_cargo}}
        </p>
        <p class="description">
          <strong>Status: </strong>{{empleado.estado_empleado}}
        </p>
        <p class="description">
          <strong>Departamento: </strong>Programación
        </p>
      </div>
      <p></p>
    </card>
</template>
<script>
  import axios from 'axios';

  export default {
    props: {
      user: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
    data() {
      return {
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
      //BUSCANDO INFORMACIÓN DEL EMPLEADO
        await axios.get('http://localhost:8000/api/usuario/empleados/'+1)
          .then(  (response) => { 
            this.empleado = response.data[0];
            this.id_persona = this.empleado.id_persona;
            console.log(this.empleado)
          })
          .catch(error => {
              console.log(error)
          });
      },  
      async getPersona(){
        await axios.get('http://localhost:8000/api/personas/'+1)
          .then(  (res) => { 
            this.persona = res.data
            console.log(this.persona)
          })
          .catch(err => {
              console.log(err)
          });
      }
    
    },
    mounted (){
        
          
    },  
    computed:{//metodos computados los cuales se ejecutan en segundo plano
      
    }
  }
  
</script>
<style>
 .prueba2{
   background-image: linear-gradient(to bottom, rgba(43, 110, 211, 0.3), rgba(18, 87, 199, 0.3), rgba(0, 65, 186, 0.3), rgba(0, 40, 170, 0.3), hsla(240, 95%, 31%, 0.3))!important;
 }
 .prueba6{
   border: 2px solid #cccccc!important;
 }
</style>
