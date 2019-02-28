<template>
  <div>
    <form-wizard 
      :start-index="1"
      shape="circle" 
      color="#1B3F65" 
      next-button-text="Siguiente"
      back-button-text="Anterior"
      finish-button-text="Crear usuario"
      @on-complete="crearUsuario">

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">

            <!-- Persona - empleado -->
            <tab-content icon="fas fa-user icon-tab" :before-change="crearPersona">
              <label>Nombre</label> <br>
              <base-input type="text" v-model="persona.nombre"></base-input> <br>
              <label>Apellido</label> <br>
              <base-input type="text" v-model="persona.apellido" @keyup="createEmail"></base-input> <br>
              <label>Sexo</label> <br>
              <base-input type="text" v-model="persona.sexo"></base-input> <br>
              <label>Fecha de nacimiento</label> <br>
              <base-input type="date" v-model="persona.fecha_nacimiento"></base-input> <br>
              <label>Cedula de identidad</label> <br>
              <base-input type="text" v-model="persona.cedula"></base-input> <br>
              <label>Profesión</label> <br>
              <base-input type="text" v-model="persona.profesion"></base-input> <br>
            </tab-content>

            <!-- Empleado -->
            <tab-content icon="fas fa-key icon-tab">
              <label>Email empresarial</label> <br>
              <base-input type="text" v-model="usuario.correo">{{this.usuario.correo}}</base-input> <br>
              <label>Contraseña</label> <br>
              <base-input type="password" v-model="usuario.password"></base-input> <br>
              <label>Tipo de usuario</label> <br>
              <base-input type="text" v-model="usuario.acceso_usuario" readonly>{{this.usuario.acceso_usuario}}</base-input> <br>
            </tab-content>
          </div>
        </div>
      </div>
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
        estado_empleado: '',
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