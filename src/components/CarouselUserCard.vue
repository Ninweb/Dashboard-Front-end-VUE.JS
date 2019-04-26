<template>
  <div>
    <!-- <infinite-slide-bar>
      <div class="slide">
        <div v-for="departamento in departamentos" :key="departamento.key">
          <div id="img">
            <img v-bind:src="apiUrl + dataUser.imageUrl" />
          </div>

          <div id="data">
            <p class="dataInfo name">{{dataUser.nombre}} {{dataUser.apellido}}</p>
            <p class="dataInfo department">{{dataUser.department}}</p>
          </div>
        </div>
      </div>
    </infinite-slide-bar> -->
  </div>

</template>
<script>
  import axios from 'axios';
  import InfiniteSlideBar from 'vue-infinite-slide-bar'

  export default {
    components: {
      InfiniteSlideBar
    },

    // props: {
    //   user: {
    //     type: Object,
    //     default: () => {
    //       return {};
    //     }
    //   },

    // },


    data() {
      return {
        dataUser: {
          nombre: '',
          apellido: '',
          cargo: '',
          imageUrl: ''
        }
      }
    },

    mounted () {
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
