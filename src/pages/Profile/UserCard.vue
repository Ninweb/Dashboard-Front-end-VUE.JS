<template>
  <div>
    <card type="user">


      <p class="card-text">
      </p>
      <div class="author">
        <div class="block block-one prueba2"></div>
        <div class="block block-two prueba2"></div>
        <div class="block block-three prueba2"></div>
        <div class="block block-four prueba2"></div>
        <a href="#">
          <img class="avatar prueba6" v-bind:src="assetsDocumentos + imagePerfil.ruta" alt="...">
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
      <div class="lds-dual-ring offset-md-1" v-if="cargando"></div>
    </card>

  </div>

</template>
<script>
  import axios from 'axios';
  import { mapState } from 'vuex'

  export default {
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
        cargando: true,
        imagePerfil: '',
        assetsDocumentos :'http://localhost:8000/documentos/'
      }
    },

    mounted () {
      console.log('hola hola')

      if(this.$store.state.allowed == '0') {
        this.$store.dispatch('getEmployer')
        this.$store.dispatch('getPersona')
      }
    },

    // mounted: {

    //   /*async getPhotoUser(){
    //     await axios.get('http://localhost:8000/api/documentos/'+1)
    //       .then(  (res) => {
    //         this.imagePerfil = res.data
    //         console.log(this.imagePerfil)
    //       })
    //       .catch(err => {
    //           console.log(err)
    //       });
    //   }*/
    // },
    computed: mapState([//metodos computados los cuales se ejecutan en segundo plano
      'empleado',
      'persona',
      'allowed'
    ])

    
  }

</script>
<style>
  .prueba2{
    background-image: linear-gradient(to bottom,
    rgba(43, 110, 211, 0.3),
    rgba(18, 87, 199, 0.3),
    rgba(0, 65, 186, 0.3),
    rgba(66, 90, 168, 0.3),
    hsla(240, 95%, 31%, 0.3))!important;
  }
  .prueba6{
    border: 2px solid #cccccc!important;
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
