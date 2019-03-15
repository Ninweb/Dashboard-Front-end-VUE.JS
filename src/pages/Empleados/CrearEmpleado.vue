<template>
  <div>
    <div class="row">
      <div class="col-md-12 align-center">
        <div>
          <router-link to="/empleados">
            <button type="button" class="btn btn-outline-primary">Regresar</button>
          </router-link>
        </div>
      </div>

      <div class="col-md-6">
        <form-wizard 
          shape="circle" 
          color="#1B3F65" 
          next-button-text="Siguiente"
          back-button-text="Anterior"
          finish-button-text="Completar"
          @on-complete="crearSalario">

          <tab-content icon="fas fa-user icon-tab" :before-change="crearPersona">
            <p id="subtitle-form">Datos de la persona</p>
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

          <tab-content icon="fas fa-key icon-tab" :before-change="crearUsuario">
            <p id="subtitle-form">Datos del usuario</p>
            <label>Email empresarial</label> <br>
            <base-input type="text" v-model="usuario.correo">{{this.usuario.correo}}</base-input> <br>
            <label>Contraseña</label> <br>
            <base-input type="password" v-model="usuario.password"></base-input> <br>
            <label>Tipo de usuario</label> <br>
            <base-input type="text" v-model="usuario.acceso_usuario" readonly></base-input> <br>
          </tab-content>

          <tab-content icon="fas fa-building icon-tab" :before-change="crearDepartamento">
            <p id="subtitle-form">Departamento</p>
            <select v-model="departamento.nombre_departamento">
              <option disabled>Seleccione departamento</option>
              <option>Diseño Gráfico</option>
              <option>Community Manager</option>
              <option>Desarrollo Web</option>
            </select> <br><br>
          </tab-content>

          <tab-content icon="fas fa-user-tie icon-tab" :before-change="crearEmpleado">
            <p id="subtitle-form">Datos del empleado</p>
            <label>Descripción del cargo</label> <br>
            <base-input type="text" v-model="empleado.descripcion_cargo"></base-input> <br>
            <label>Fecha de ingreso</label> <br>
            <base-input type="date" v-model="empleado.fecha_ingreso"></base-input> <br>
            <label>Fecha de retiro</label> <br>
            <base-input type="date" v-model="empleado.fecha_retirado"></base-input> <br>
            <label>Estatus del empleado</label> <br>
            <base-input type="text" v-model="empleado.estado_empleado" readonly></base-input> <br>
            <label>Descripción de la ruta hogar - oficina</label> <br>
            <textarea rows="3" v-model="empleado.descripcion_transporte_ida"></textarea> <br><br>
            <label>Descripción de la ruta oficina - hogar</label> <br>
            <textarea rows="3" v-model="empleado.descripcion_transporte_vuelta"></textarea> <br><br>
            <label>Número de habitación</label> <br>
            <base-input type="text" v-model="empleado.numero_habitacion"></base-input> <br>
            <label>Número de celular</label> <br>
            <base-input type="text" v-model="empleado.numero_celular"></base-input> <br>
            <label>Tipo de sangre</label> <br>
            <base-input type="text" v-model="empleado.tipo_sangre"></base-input> <br>
            <label>Profesión</label> <br>
            <base-input type="text" v-model="empleado.profesion" readonly></base-input> <br>
            <label>Estado civil</label> <br>
            <base-input type="text" v-model="empleado.estado_civil"></base-input> <br>
            <label>Educación</label> <br>
            <base-input type="text" v-model="empleado.educacion"></base-input> <br>
          </tab-content>

          <tab-content icon="fas fa-dollar-sign icon-tab">
            <p id="subtitle-form">Sueldo del empleado</p>
            <label>Sueldo base</label> <br>
            <base-input type="text" v-model="salario.salario_base"></base-input> <br>
            <label>Cesta Ticket</label> <br>
            <base-input type="date" v-model="salario.salario_ticket"></base-input> <br>
            <label>Seguro</label> <br>
            <base-input type="text" v-model="salario.salario_seguro"></base-input> <br>
            <label>Fecha de inicio del sueldo</label> <br>
            <base-input type="date" v-model="salario.fecha_inicio"></base-input> <br>
          </tab-content>
        </form-wizard>
      </div>

      <div class="col-md-6 main-verify">
        <div id="verify">
          <card class="ficha">            
            <p id="subtitle-form-resume">Datos de la persona</p>
            Nombre: {{this.persona.nombre}} <br><br>
            Apellido: {{this.persona.apellido}} <br><br>
            Sexo: {{this.persona.sexo}} <br><br>
            Fecha de nacimiento: {{this.persona.fecha_nacimiento}} <br><br>
            Cédula de identidad: {{this.persona.cedula}} <br><br>
            Profesión: {{this.persona.profesion}} <br>
            
            <p id="subtitle-form-resume">Datos del usuario</p>
            Email empresarial: {{this.usuario.correo}}<br><br>
            Contraseña: {{this.passMsg}}<br><br>

            <p id="subtitle-form-resume">Departamento</p>
            Departamento: {{this.departamento.nombre_departamento}}<br><br>
            
            <p id="subtitle-form-resume">Datos del empleado</p>
            Descripción del cargo: {{this.empleado.descripcion_cargo}}<br><br>
            Fecha de ingreso: {{this.empleado.fecha_ingreso}}<br><br>
            Fecha de retiro: {{this.empleado.fecha_retirado}}<br><br>
            Estatus del empleado: {{this.empleado.estado_empleado}}<br><br>
            Descripción de la ruta hogar - oficina: {{this.empleado.descripcion_transporte_ida}}<br><br>
            Descripción de la ruta oficina - hogar: {{this.empleado.descripcion_transporte_vuelta}}<br><br>
            Número de habitación: {{this.empleado.numero_habitacion}}<br><br>
            Número de celular: {{this.empleado.numero_celular}}<br><br>
            Tipo de sangre: {{this.empleado.tipo_sangre}}<br><br>
            Profesión: {{this.empleado.profesion}}<br><br>
            Estado civil: {{this.empleado.estado_civil}}<br><br>
            Educación: {{this.empleado.educacion}} <br>           
          </card>

          <div id="info">
            Por favor, verifíque la información ingresada en el formulario antes de hacer click en <b>Crear usuario</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      passMsg: 'La que ingreso',

      persona: {
        nombre: '', 
        apellido: '',
        sexo: '',
        fecha_nacimiento: '',
        cedula: '',
        profesion: '',
        // correoPersonal: ''
      },

      usuario: {
        correo: '',
        password: '',
        acceso_usuario: 'empleado',
        first_login: 1        
      },

      departamento: {
        nombre_departamento: ''
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
      // console.log('acceso ', this.$store.state.acceso_usuario)
      // console.log('usuario loegado ', this.$store.state.usuarioLogeado)
      this.persona.nombre.toLowerCase()
      var firstLetter = this.persona.nombre.charAt(0)
      this.usuario.correo = firstLetter + this.persona.apellido + '@ninweb.net'
      this.usuario.correo.toLowerCase()
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
          resolve(true)
        }).catch(error => {
          console.log('error ', response)
          reject(false)
        })
      })
    },

    crearDepartamento() {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/departamentos', this.departamento).then(response => {
          console.log('hi')
          this.empleado.profesion = this.persona.profesion
          resolve(true)
        }).catch(error => {
          console.log('bye')
          reject(false)
        })
      })
    },

    crearEmpleado() {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/empleados', this.empleado).then(response => {
          console.log('success2 ', response)
          resolve(true)
        }).catch(error => {
          console.log('error2 ', response)
          reject(false)
        })
      })
    },

    crearSalario() {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/salarios', this.salario).then(response => {
          console.log('success3 ', response)
          Swal.fire({
            type: 'success',
            title: '¡Genial!',
            text: 'Se ha creado el perfil de empleado con éxito. :thumbsup:'
          })
          resolve(true)
        }).catch(error => {
          console.log('error3 ', response)
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

  #subtitle-form-resume {
    font-size: 16px;
    font-weight: 300;
    color: white;
    text-align: center;
    margin: 5px;
  }

  select, textarea {
    width: 100%;
    padding: 0.5rem 0.7rem;
    background: transparent;
    color: white;
    border-color: #1b64a8;
    border-radius: 0.4285rem;
    font-size: 0.75rem;
  }

  option {
    color: black;
  }
</style>
