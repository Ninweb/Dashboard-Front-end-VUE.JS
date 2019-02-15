<template>
  <div>
    <card type="user">
        <div class="author">
            <div class="block block-one prueba2"></div>
            <div class="block block-two prueba2"></div>
            <div class="block block-three prueba2"></div>
            <div class="block block-four prueba2"></div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">
                    <a href="#">
                        <img class="avatar " src="img/gabriel.jpg" alt="...">
                        <h4 class="title">Editar foto</h4>
                    </a>
                </div>
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-5">
                            <p><strong>Nombres</strong></p>
                            <h4>{{ persona.nombre }}</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Apellidos</strong></p>
                            <h4>{{ persona.apellido }}</h4>
                        </div>
                        <div class="col-md-4">
                            <p><strong>Cédula</strong></p>
                            <h4>{{ persona.cedula }}</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <p><strong>Correo</strong></p>
                            <h4>{{ usuarioLogeado.usuario.correo }}</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Password</strong></p>
                            <h4>*********</h4>
                        </div>
                        <div class="col-md-4">
                            <p><strong>Fecha de Nacimiento</strong></p>
                            <h4>{{ persona.fecha_nacimiento }}</h4>
                        </div>
                    </div>
                </div>
                <hr style="border: 0.3px solid #ccc; width:100%;">
                <div class="col-md-12">
                        <div class="row">
                        <div class="col-md-3">
                            <p><strong>Profesión</strong></p>
                            <h4>{{ persona.profesion }}</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Sexo</strong></p>
                            <h4>{{ persona.sexo }}</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Ciudad</strong></p>
                            <h4>Caracas</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Municipio</strong></p>
                            <h4>Libertador</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                        <div class="row">
                        <div class="col-md-3">
                            <p><strong>Alcaldía</strong></p>
                            <h4>Gran Caracas</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Parroquía</strong></p>
                            <h4>Caricuao</h4>
                        </div>
                        <div class="col-md-6">
                            <p><strong>Zona</strong></p>
                            <h4>UD-4 , Mucuritas , Bloque 15 , Piso 03</h4>
                        </div>
                    </div>
                </div>
                <hr style="border: 0.5px solid #ccc; width:100%;">
                <div class="col-md-12">
                        <div class="row">
                        <div class="col-md-3">
                            <p><strong>Departamento</strong></p>
                            <h4>Programación</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Cargo</strong></p>
                            <h4>Programador</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Status</strong></p>
                            <h4>Activo</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Educación</strong></p>
                            <h4>Universitaria</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </card>
   
  </div>
    
</template>

<script>
import axios from 'axios';

export default {
    
    data() {
      return {
        usuarioLogeado: '',
        empleado: '',
        persona:'',
        direccion_empleado:'',
        id_persona : '',
        cargando: true,
        imagePerfil: '',
        assetsDocumentos :'http://localhost:8000/documentos/'
      }
    },
    created: function(){
      this.getUsuarioLogeado();
      this.getEmpleado();
      this.getPersona();
      this.getDireccion();
      this.getPhotoUser();

    },
    methods: {
      getUsuarioLogeado(){
        let usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'));
        this.usuarioLogeado = usuarioLogeado;
        console.log('estoy cargando en editar profile')
        console.log(usuarioLogeado); 
      },
      async getEmpleado(){
        console.log(this.usuarioLogeado);
      //BUSCANDO INFORMACIÓN DEL EMPLEADO
        await axios.get('http://localhost:8000/api/usuario/empleados/'+this.usuarioLogeado.usuario.id)
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
        await axios.get('http://localhost:8000/api/personas/'+this.id_persona)
          .then(  (res) => { 
            this.persona = res.data[0];
            console.log(this.persona);
            this.cargando = false
          })
          .catch(err => {
              console.log(err)
          });
      },

      async getPhotoUser(){
        await axios.get('http://localhost:8000/api/documentos/'+1)
          .then(  (res) => { 
            this.imagePerfil = res.data
            console.log(this.imagePerfil)
          })
          .catch(err => {
              console.log(err)
          });
      },
      async getDireccion(){
        await axios.get('http://localhost:8000/api/direcciones/'+this.id_persona)
          .then(  (res) => { 
            console.log('hola mundo')
            console.log(res);
            this.direccion_empleado = res.data[0];
            console.log(this.direccion_empleado);
            
          })
          .catch(err => {
              console.log(err)
          });
      }
    }
}
</script>

<style>
    .iconBtn{
        font-size: 20px!important;
        margin-right: 15px;
    }
   .btnEditar{
       border-radius: 8px;
       color: white!important;
       background:rgba(0, 0, 0, 0.3)!important;
       border: 1px solid #344675;
       margin: 4px;
       
   }
</style>
