<template>
  <div>
    <div class="row justify-content-center align-items-center fuentes">
      <div class="col-md-10">
        <carousel
          :per-page="1"
          :min-swipe-distance="20"
          :mouse-drag="false"
          :autoplay="true"
          :loop="true"
          :autoplayTimeout="5000"
          :speed="700">
          <slide>
            <card type="user">
              <p class="card-text">
              </p>
              <div class="author">
                <!-- <div class="block block-one prueba2"></div>
                <div class="block block-two prueba2"></div>
                <div class="block block-three prueba2"></div>
                <div class="block block-four prueba2"></div> -->
                <a href="#">
                  <img class="avatar prueba6" v-bind:src="assetsDocumentos + imagePerfil.ruta" alt="...">
                  <h4 class="title">{{imagePerfil.ruta}}</h4>
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
          </slide>

          <slide>
            <card type="user">
              <p class="card-text">
              </p>
              <div class="author">
                <!-- <div class="block block-one prueba2"></div>
                <div class="block block-two prueba2"></div>
                <div class="block block-three prueba2"></div>
                <div class="block block-four prueba2"></div> -->
                <a href="#">
                  <img class="avatar prueba6" v-bind:src="assetsDocumentos + imagePerfil.ruta" alt="...">
                  <h4 class="title">{{imagePerfil.ruta}}</h4>
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
          </slide>

          <slide>
            <card type="user">
              <p class="card-text">
              </p>
              <div class="author">
                <!-- <div class="block block-one prueba2"></div>
                <div class="block block-two prueba2"></div>
                <div class="block block-three prueba2"></div>
                <div class="block block-four prueba2"></div> -->
                <a href="#">
                  <img class="avatar prueba6" v-bind:src="assetsDocumentos + imagePerfil.ruta" alt="...">
                  <h4 class="title">{{imagePerfil.ruta}}</h4>
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
          </slide>

          <slide>
            <card type="user">
              <p class="card-text">
              </p>
              <div class="author">
                <!-- <div class="block block-one prueba2"></div>
                <div class="block block-two prueba2"></div>
                <div class="block block-three prueba2"></div>
                <div class="block block-four prueba2"></div> -->
                <a href="#">
                  <img class="avatar prueba6" v-bind:src="assetsDocumentos + imagePerfil.ruta" alt="...">
                  <h4 class="title">{{imagePerfil.ruta}}</h4>
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
          </slide>
        </carousel>
      </div>
    </div>
  </div>

</template>
<script>
  import axios from 'axios';
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    components: {
      Carousel,
      Slide,
    },

    props: {
      user: {
        type: Object,
        default: () => {
          return {};
        }
      },

    },
    data() {
      return {
        usuarioLogeado: '',
        empleado: '',
        persona:'',
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
      this.getPhotoUser();

    },
    methods: {
      getUsuarioLogeado(){
        let usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'));
        this.usuarioLogeado = usuarioLogeado;
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
   background-image: linear-gradient(to bottom,
  rgba(43, 110, 211, 0.3),
  rgba(18, 87, 199, 0.3),
  rgba(0, 65, 186, 0.3),
  rgba(0, 40, 170, 0.3),
  hsla(240, 95%, 31%, 0.3))!important;
 }
 .prueba6{
   border: 2px solid #cccccc!important;
 }

 .VueCarousel-pagination[data-v-438fd353] {
   margin-top: -40px;
 }

 .lds-dual-ring2 {
  display: inline-block;
  position: relative;
  top:30px;
  width: 84px;
  height: 84px;
}
.lds-dual-ring2:after {
  content: " ";
  display: block;
  width: 80px;
  height: 80px;
  margin: 1px;
  border-radius: 50%;
  border: 10px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
</style>
