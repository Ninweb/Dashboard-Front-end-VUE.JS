<template>
  <div>
    <form-wizard 
      shape="circle" 
      color="#1B3F65" 
      next-button-text="Siguiente"
      back-button-text="Anterior"
      finish-button-text="Completar"
      @on-complete="crearUsuario">

      <!-- <div class="container"> -->
        <!-- <div class="row justify-content-center"> -->
          <!-- <div class="col-md-6"> -->

            <!-- Persona - empleado -->
            <tab-content icon="fas fa-user icon-tab">
              <p>Datos personales del empleado</p>
              <label>Nombre</label> <br>
              <base-input type="text" v-model="personaEmpleado.nombre"></base-input> <br>
              <label>Apellido</label> <br>
              <base-input type="text" v-model="personaEmpleado.apellido" @keyup="createEmail"></base-input> <br>
              <label>Sexo</label> <br>
              <base-input type="text" v-model="personaEmpleado.sexo"></base-input> <br>
              <label>Fecha de nacimiento</label> <br>
              <base-input type="date" v-model="personaEmpleado.fecha_nacimiento"></base-input> <br>
              <label>Cedula de identidad</label> <br>
              <base-input type="text" v-model="personaEmpleado.cedula"></base-input> <br>
              <label>Profesión</label> <br>
              <base-input type="text" v-model="personaEmpleado.profesion"></base-input> <br>
            </tab-content>

            <!-- Empleado -->
            <tab-content icon="fas fa-key icon-tab">
              <p>Datos del empleado</p>
              <label>Descripción del cargo</label> <br>
              <base-input type="text" v-model="empleado.descripcion_cargo"></base-input> <br>
              <label>Fecha de ingreso</label> <br>
              <base-input type="date" v-model="empleado.fecha_ingreso"></base-input> <br>
              <label>Estatus del empleado</label> <br>
              <base-input type="text" v-model="empleado.estado_empleado"></base-input> <br>
              <label>Descripción de la ruta hogar - oficina</label> <br>
              <base-input type="text" v-model="empleado.descripcion_transporte_ida"></base-input> <br>
              <label>Descripción de la ruta oficina - hogar</label> <br>
              <base-input type="text" v-model="empleado.descripcion_transporte_ida"></base-input> <br>
              <label>Número de habitación</label> <br>
              <base-input type="text" v-model="empleado.numero_habitacion"></base-input> <br>
              <label>Número de celular</label> <br>
              <base-input type="text" v-model="empleado.numero_celular"></base-input> <br>
              <label>Tipo de sangre</label> <br>
              <base-input type="text" v-model="empleado.tipo_sangre"></base-input> <br>
              <label>Profesión</label> <br>
              <base-input type="text" v-model="empleado.profesion"></base-input> <br>
              <label>Estado civil</label> <br>
              <base-input type="text" v-model="empleado.estado_civil"></base-input> <br>
              <label>Educación</label> <br>
              <base-input type="text" v-model="empleado.educacion"></base-input> <br>
            </tab-content>

            <!-- Salario -->
            <tab-content icon="fas fa-key icon-tab">
              <p>Sueldo del empleado</p>
              <label>Sueldo base</label> <br>
              <base-input type="text" v-model="salario.salario_base"></base-input> <br>
              <label>Cesta Ticket</label> <br>
              <base-input type="date" v-model="salario.salario_ticket"></base-input> <br>
              <label>Seguro</label> <br>
              <base-input type="text" v-model="salario.salario_seguro"></base-input> <br>
              <label>Fecha de inicio del sueldo</label> <br>
              <base-input type="date" v-model="salario.fecha_inicio"></base-input> <br>
            </tab-content>

            <!-- Direccion -->
            <tab-content icon="fas fa-key icon-tab">
              <p>Dirección del empleado</p>
              <label>Parroquia</label> <br>
              <base-input type="text" v-model="direccion.parroquia"></base-input> <br>
              <label>Município</label> <br>
              <base-input type="date" v-model="direccion.municipio"></base-input> <br>
              <label>Alcaldía</label> <br>
              <base-input type="text" v-model="direccion.alcaldia"></base-input> <br>
              <label>Ciudad</label> <br>
              <base-input type="date" v-model="direccion.ciudad"></base-input> <br>
              <label>Zona</label> <br>
              <base-input type="date" v-model="direccion.zona"></base-input> <br>
            </tab-content>
          <!-- </div> -->
        <!-- </div> -->
      <!-- </div> -->
    </form-wizard>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usuario: {
        correo: '',
        password: '',
        acceso_usuario: 'empleado',
        first_login: 1        
      },

      personaEmpleado: {
        nombre: '', 
        apellido: '',
        sexo: '',
        fecha_nacimiento: '',
        cedula: '',
        profesion: '',
        // correoPersonal: ''
      },

      empleado: {
        descripcion_cargo: '',
        fecha_ingreso: '',
        fecha_retirado: '',
        estado_empleado: 'activo',
        descripcion_transporte_ida: '',
        descripcion_transporte_vuelta: '',
        numero_habitacion: '',
        numero_celular: '',
        tipo_sangre: '',
        profesion: '',
        estado_civil: '',
        educacion: ''
      },

      salario: {
        salario_base: '',
        salario_ticket: '',
        salario_seguro: '',
        fecha_inicio: '',
        fecha_fin: ''
      },

      direccion: {
        parroquia: '',
        municipio: '',
        alcaldia: '',
        ciudad: '',
        zona: ''
      },

      personaReferenciaFamiliar: {
        nombre: '', 
        apellido: '',
        sexo: '',
        fecha_nacimiento: '',
        cedula: '',
        profesion: '',
        // correoPersonal: ''
      },

      referenciaFamiliar: {
        parentezco: '',
        telefono: '',
        sexo: ''
      },

      personaReferenciaSecundaria: {
        nombre: '', 
        apellido: '',
        sexo: '',
        fecha_nacimiento: '',
        cedula: '',
        profesion: '',
        // correoPersonal: ''
      },

      referenciaSecundaria: {
        parentezco: '',
        tiempo_conocido: '',
        telefono: ''
      }
    }
  },

  mounted: {
    
    getUsuarioLogeado(){
      let usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'));
      this.usuarioLogeado = usuarioLogeado;
      console.log('estoy cargando en editar profile')
      console.log(usuarioLogeado); 
    },
  },

  methods: {
    createEmail () {
      console.log('acceso ', this.$store.state.acceso_usuario)
      console.log('usuario loegado ', this.$store.state.usuarioLogeado)
      this.persona.nombre.toLowerCase()
      var firstLetter = this.persona.nombre.charAt(0)
      this.usuario.correo = firstLetter + this.persona.apellido + '@ninweb.net'
    },

    crearPersona () {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/personas', this.persona).then(response => {
          resolve(true)
        }).catch(error => {
          reject(false)
        })
      })
    },

    crearUsuario () {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/usuarios', this.usuario).then(response => {
          console.log('success ', response)
          alert('Done!')
          resolve(true)
        }).catch(error => {
          console.log('error ', response)
          reject(false)
        })
      })
    }
  }
}
</script>

<style>

  .ficha {
    font-size: 14px !important;
  }

  #info {
    font-size: 16px;
    text-align: center;
    color: white !important;
  }

  .wizard-header {
    display: none;
  }

  .icon-tab {
    color: #1B3F65;
    font-size: 22px;
  }
</style>