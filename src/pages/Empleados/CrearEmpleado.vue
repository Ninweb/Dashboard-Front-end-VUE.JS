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

      <div>        
        <p id="info">Por favor verifíque la información que ingresará antes de completar el formulario. Utilíze la ficha resumen, al lado derecho de la pantalla, como ayuda para verificar la información.</p>
      </div>

      <div class="col-md-6 nuevoEmpleado">
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
            <select v-model="persona.sexo">
              <option>Masculino</option>
              <option>Femenino</option>
            </select> <br><br>
            <label>Fecha de nacimiento</label> <br>
            <base-input type="date" v-model="persona.fecha_nacimiento"></base-input> <br>
            <label>Cedula de identidad</label> <br>
            <base-input type="text" v-model="persona.cedula" readonly></base-input> <br>
            <label>Profesión</label> <br>
            <base-input type="text" v-model="persona.profesion" readonly></base-input> <br>
          </tab-content>          

          <tab-content icon="fas fa-key icon-tab" :before-change="crearUsuario">
            <p id="subtitle-form">Datos del usuario</p>
            <label>Email empresarial</label> <br>
            <base-input type="text" v-model="usuario.correo">{{this.usuario.correo}}</base-input> <br>
            <label>Contraseña</label> <br>
            <base-input type="password" v-model="usuario.password"></base-input> <br>
            <label>Tipo de usuario</label> <br>
            <select v-model="usuario.acceso_usuario">
              <option>Empleado</option>
              <option>Administrador</option>
            </select> <br>
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
            <label>Número de carnet</label> <br>
            <base-input type="text" v-model="empleado.numero_carnet"></base-input> <br>
            <label>Descripción del cargo</label> <br>
            <base-input type="text" v-model="empleado.descripcion_cargo"></base-input> <br>
            <label>Fecha de ingreso</label> <br>
            <base-input type="date" v-model="empleado.fecha_ingreso"></base-input> <br>
            <label>Fecha de retiro</label> <br>
            <base-input type="date" v-model="empleado.fecha_retirado"></base-input> <br>
            <label>Estatus del empleado</label> <br>
            <base-input type="text" v-model="empleado.estado_empleado" readonly></base-input> <br>
            <label>Descripción de la ruta hogar - oficina</label> <br>
            <textarea rows="3" v-model="empleado.descripcion_transporte_ida" readonly></textarea> <br><br>
            <label>Descripción de la ruta oficina - hogar</label> <br>
            <textarea rows="3" v-model="empleado.descripcion_transporte_vuelta" readonly></textarea> <br><br>
            <label>Número de habitación</label> <br>
            <base-input type="text" v-model="empleado.numero_habitacion" readonly></base-input> <br>
            <label>Número de celular</label> <br>
            <base-input type="text" v-model="empleado.numero_celular" readonly></base-input> <br>
            <label>Tipo de sangre</label> <br>
            <base-input type="text" v-model="empleado.tipo_sangre" readonly></base-input> <br>
            <label>Profesión</label> <br>
            <base-input type="text" v-model="empleado.profesion" readonly></base-input> <br>
            <label>Estado civil</label> <br>
            <base-input type="text" v-model="empleado.estado_civil" readonly></base-input> <br>
            <label>Educación</label> <br>
            <base-input type="text" v-model="empleado.educacion" readonly></base-input> <br>
          </tab-content>

          <tab-content icon="fas fa-dollar-sign icon-tab">
            <p id="subtitle-form">Sueldo del empleado</p>
            <label>Sueldo base</label> <br>
            <base-input type="text" v-model="salario.salario_base"></base-input> Bs <br>
            <label>Cesta Ticket</label> <br>
            <base-input type="text" v-model="salario.salario_ticket"></base-input> <br>
            <label>Seguro</label> <br>
            <base-input type="text" v-model="salario.salario_seguro"></base-input> <br>
            <label>Fecha de inicio del sueldo</label> <br>
            <base-input type="date" v-model="salario.fecha_inicio"></base-input> <br>
            <label>Fecha de cierre del sueldo</label> <br>
            <base-input type="date" v-model="salario.fecha_fin"></base-input> <br>
          </tab-content>
        </form-wizard>
      </div>

      <div class="col-md-6 main-verify">
        <div id="verify">
          <card class="ficha">            
            <p id="info">Estos campos son los que se estan completando manualmente, los demas tienen valores por defecto para que el usuario respectivo los complete.</p>
            <p id="subtitle-form-resume">Datos de la persona</p>
            <b>Nombre</b>: {{this.persona.nombre}} <br><br>
            <b>Apellido</b>: {{this.persona.apellido}} <br><br>
            <b>Sexo</b>: {{this.persona.sexo}} <br><br>
            <b>Fecha de nacimiento</b>: {{this.persona.fecha_nacimiento}} <br><br>
            <!-- <b>Cédula de identidad</b>: {{this.persona.cedula}} <br><br>
            <b>Profesión:</b> {{this.persona.profesion}} <br> -->
            
            <p id="subtitle-form-resume">Datos del usuario</p>
            <b>Email empresarial:</b> {{this.usuario.correo}}<br><br>
            <b>Contraseña:</b> {{this.passMsg}}<br><br>

            <p id="subtitle-form-resume">Departamento</p>
            <b>Departamento:</b> {{this.departamento.nombre_departamento}}<br><br>
            
            <p id="subtitle-form-resume">Datos del empleado</p>
            <b>Número de carnet:</b> {{this.empleado.numero_carnet}}<br><br>
            <b>Descripción del cargo:</b> {{this.empleado.descripcion_cargo}}<br><br>
            <b>Fecha de ingreso:</b> {{this.empleado.fecha_ingreso}}<br><br>
            <b>Fecha de retiro:</b> {{this.empleado.fecha_retirado}}<br><br>
            <b>Estatus del empleado:</b> {{this.empleado.estado_empleado}}<br><br>
            <!-- <b>Descripción de la ruta hogar - oficina:</b> {{this.empleado.descripcion_transporte_ida}}<br><br>
            <b>Descripción de la ruta oficina - hogar:</b> {{this.empleado.descripcion_transporte_vuelta}}<br><br>
            <b>Número de habitación:</b> {{this.empleado.numero_habitacion}}<br><br>
            <b>Número de celular:</b> {{this.empleado.numero_celular}}<br><br>
            <b>Tipo de sangre:</b> {{this.empleado.tipo_sangre}}<br><br>
            <b>Profesión:</b> {{this.empleado.profesion}}<br><br>
            <b>Estado civil:</b> {{this.empleado.estado_civil}}<br><br>
            <b>Educación:</b> {{this.empleado.educacion}} <br> -->      

            <p id="subtitle-form-resume">Datos del salario</p>
            <b>Sueldo base:</b> {{this.salario.salario_base}} Bs<br><br>
            <b>Cesta Ticket:</b> {{this.salario.salario_ticket}} Bs<br><br>
            <b>Seguro:</b> {{this.salario.salario_seguro}} Bs<br><br>
            <b>Fecha de inicio del sueldo:</b> {{this.salario.fecha_inicio}}<br><br>
            <b>Fecha de cierre del sueldo:</b> {{this.salario.fecha_fin}} <br><br>     
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // defaultValue: 'Completar',
      passMsg: 'La que ingreso',

      persona: {
        nombre: '', 
        apellido: '',
        sexo: '',
        fecha_nacimiento: '',
        cedula: 'Completar por el usuario',
        profesion: 'Completar por el usuario',
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
        numero_carnet: '',
        descripcion_cargo: '',
        fecha_ingreso: '',
        fecha_retirado: '',
        estado_empleado: 'activo',
        descripcion_transporte_ida: 'Completar por el usuario',
        descripcion_transporte_vuelta: 'Completar por el usuario',
        numero_habitacion: 'Completar por el usuario',
        numero_celular: 'Completar por el usuario',
        tipo_sangre: 'Completar por el usuario',
        profesion: 'Completar por el usuario',
        estado_civil: 'Completar por el usuario',
        educacion: 'Completar por el usuario'
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
      // this.salario.salario_base = this.salario.salario_base + ' Bs'
      // this.salario.salario_ticket = this.salario.salario_ticket + ' Bs'
      // this.salario.salario_seguro = this.salario.salario_seguro + ' Bs'
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/salarios', this.salario).then(response => {
          console.log('success3 ', response)
          resolve(true)
          Swal.fire({
            type: 'success',
            title: '¡Genial!',
            text: 'Se ha creado el perfil de empleado con éxito. &#128077;'
          }).then(() => {
            this.$refs.wizard.reset()
          })
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
    color: white !important;
  }

  .nuevoEmpleado label {
    color: white !important;
  }

  #info {
    font-size: 18px;
    text-align: center;
    color: white !important;
    margin: 20px auto;
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
