<template>
    <div>
        <div>
            <div class="row justify-content-center align-items-center fuentes">
                <div class="col-md-12">
                  <div  v-if="!cargando">
                    <carousel
                    :per-page="1"
                    :min-swipe-distance="20"
                    :mouse-drag="false"
                    :autoplay="true"
                    :loop="true"
                    :autoplayTimeout="5000"
                    :speed="700">
                      <div v-for="empleado in empleadoDepartamento" v-bind:key="empleado.id" >
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
                                <img class="avatar prueba6" alt="...">
                                <h4 class="title">Prueba</h4>
                                <h4 class="title">{{empleado.persona.nombre }}</h4>
                                </a>
                                <p class="description">
                                <strong>Cargo: </strong>{{empleado.descripcion_cargo}}
                                </p>
                                <p class="description">
                                <strong>Status: </strong>{{empleado.estado_empleado}}
                                </p>
                                <p class="description">
                                <strong>Departamento: </strong>{{empleado.persona.nombre }}
                                </p>
                            </div>
                            <p></p>
                            </card>
                        </slide>
                      </div>
                    </carousel>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios';

export default {
    components:{
      Carousel,
      Slide,
    },
    data() {
      return {
        id_departamento: 1,
        usuarioLogeado: '',
        empleado: '',
        persona:'',
        empleadoDepartamento : '',
        personaDepartamento: [],
        id_persona : '',
        cargando: true,
        imagePerfil: '',
        assetsDocumentos :'http://localhost:8000/documentos/'
      }
    },
    props: {
      user: {
        type: Object,
        default: () => {
          return {};
        }
      },

    },
    created: function(){
      this.getEmpleadoDepartamento();
    },
    methods: {
      async getEmpleadoDepartamento(){
        console.log(this.usuarioLogeado);
      //BUSCANDO INFORMACIÓN DE LOS EMPLEADOS POR DEPARTAMENTO 
        await axios.get('http://localhost:8000/api/empleadoDepartamento/'+this.id_departamento)
          .then(  (response) => { 
            console.log(response)
            this.empleadoDepartamento = response.data;
            for(let i = 0 ; i<this.empleadoDepartamento.length;i++ ){
              let id_persona = this.empleadoDepartamento[i].id_persona;
               axios.get('http://localhost:8000/api/personas/'+this.id_persona)
                .then( res => {
                  this.empleadoDepartamento[i].persona = res.data[0];
                  this.cargando = false;
                  console.log(this.empleadoDepartamento[i].persona.nombre)
                })
            }
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


<style>

</style>
