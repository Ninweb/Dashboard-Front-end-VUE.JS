<template>
  <div id="complete">
    <form-wizard
      shape="circle" 
      color="#1B3F65" 
      next-button-text="Siguiente"
      back-button-text="Anterior"
      finish-button-text="Completar"
      @onComplete="finishProcess">

      <!-- Persona - empleado -->
      <tab-content class="tab-content" icon="fas fa-user icon-tab" :before-change="updatePersonaEmpleadoData">
        <p id="subtitle-form">Datos personales del empleado</p>
        <label>Nombre</label> <br>
        <base-input type="text" v-model="personaEmpleado.nombre"></base-input> <br>
        <label>Apellido</label> <br>
        <base-input type="text" v-model="personaEmpleado.apellido"></base-input> <br>
        <label>Sexo</label> <br>
        <select v-model="personaEmpleado.sexo">
          <option>Masculino</option>
          <option>Femenino</option>
        </select> <br><br>
        <label>Fecha de nacimiento</label> <br>
        <base-input type="date" v-model="personaEmpleado.fecha_nacimiento"></base-input> <br>
        <label>Cedula de identidad</label> <br>
        <base-input type="text" v-model="personaEmpleado.cedula"></base-input> <br>
        <label>Profesión</label> <br>
        <base-input type="text" v-model="personaEmpleado.profesion"></base-input> <br>
      </tab-content>

      <!-- Empleado -->
      <tab-content class="tab-content" icon="fas fa-user-tie icon-tab" :before-change="updateEmpleadoData">
        <p id="subtitle-form">Datos del empleado</p>
        <label>Departamento</label> <br>
        <base-input type="text" v-model="departamento.nombre_departamento" readonly></base-input> <br>
        <label>Descripción del cargo</label> <br>
        <base-input type="text" v-model="empleado.descripcion_cargo" readonly></base-input> <br>
        <label>Fecha de ingreso</label> <br>
        <base-input type="date" v-model="empleado.fecha_ingreso" readonly></base-input> <br>
        <label>Estatus del empleado</label> <br>
        <base-input type="text" v-model="empleado.estado_empleado" readonly></base-input> <br>
        <label>Descripción de la ruta hogar - oficina</label> <br>
        <textarea rows="3" v-model="empleado.descripcion_transporte_ida" readonly></textarea> <br><br>
        <label>Descripción de la ruta oficina - hogar</label> <br>
        <textarea rows="3" v-model="empleado.descripcion_transporte_vuelta" readonly></textarea> <br><br>
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
      <tab-content class="tab-content" icon="fas fa-dollar-sign icon-tab" @on-change="showSalaryToast">
        <p id="subtitle-form">Sueldo del empleado</p>
        <label>Sueldo base</label> <br>
        <base-input type="text" v-model="salario.salario_base" readonly></base-input> <br>
        <label>Cesta Ticket</label> <br>
        <base-input type="text" v-model="salario.salario_ticket" readonly></base-input> <br>
        <label>Seguro</label> <br>
        <base-input type="text" v-model="salario.salario_seguro" readonly></base-input> <br>
        <!-- <label>Fecha de inicio del sueldo</label> <br>
        <base-input type="date" v-model="salario.fecha_inicio"></base-input> <br> -->
      </tab-content>

      <!-- Direccion -->
      <tab-content class="tab-content" icon="fas fa-map-marked-alt icon-tab" :before-change="createDireccionData">
        <p id="subtitle-form">Dirección del empleado</p>
        <label>Parroquia</label> <br>
        <base-input type="text" v-model="direccion.parroquia"></base-input> <br>
        <label>Município</label> <br>
        <base-input type="text" v-model="direccion.municipio"></base-input> <br>
        <label>Alcaldía</label> <br>
        <base-input type="text" v-model="direccion.alcaldia"></base-input> <br>
        <label>Ciudad</label> <br>
        <base-input type="date" v-model="direccion.ciudad"></base-input> <br>
        <label>Zona</label> <br>
        <base-input type="date" v-model="direccion.zona"></base-input> <br>
      </tab-content>

      <!-- Persona - referencia familiar -->
      <tab-content class="tab-content" icon="fas fa-user icon-tab" :before-change="createPersonaReferFamiliar">
        <p id="subtitle-form">Datos de la persona - familiar a referenciar</p>
        <label>Nombre</label> <br>
        <base-input type="text" v-model="personaReferenciaFamiliar.nombre"></base-input> <br>
        <label>Apellido</label> <br>
        <base-input type="text" v-model="personaReferenciaFamiliar.apellido"></base-input> <br>
        <label>Sexo</label> <br>
        <base-input type="text" v-model="personaReferenciaFamiliar.sexo"></base-input> <br>
        <label>Fecha de nacimiento</label> <br>
        <base-input type="date" v-model="personaReferenciaFamiliar.fecha_nacimiento"></base-input> <br>
        <label>Cedula de identidad</label> <br>
        <base-input type="text" v-model="personaReferenciaFamiliar.cedula"></base-input> <br>
        <label>Profesión</label> <br>
        <base-input type="text" v-model="personaReferenciaFamiliar.profesion"></base-input> <br>
      </tab-content>

      <!-- Referencia familiar -->
      <tab-content class="tab-content" icon="fas fa-users icon-tab" :before-change="createReferFamiliar">
        <p id="subtitle-form">Referencia familiar</p>
        <label>Parentezco</label> <br>
        <base-input type="text" v-model="referenciaFamiliar.parentezco"></base-input> <br>
        <label>Teléfono</label> <br>
        <base-input type="date" v-model="referenciaFamiliar.telefono"></base-input> <br>
        <label>Sexo</label> <br>
        <base-input type="text" v-model="referenciaFamiliar.sexo"></base-input> <br>
      </tab-content>

      <!-- Persona - referencia Personal -->
      <tab-content class="tab-content" icon="fas fa-user icon-tab" :before-change="createPersonaReferPersonal">
        <p id="subtitle-form">Datos de la persona - tercera a referenciar</p>
        <label>Nombre</label> <br>
        <base-input type="text" v-model="personaReferenciaPersonal.nombre"></base-input> <br>
        <label>Apellido</label> <br>
        <base-input type="text" v-model="personaReferenciaPersonal.apellido"></base-input> <br>
        <label>Sexo</label> <br>
        <base-input type="text" v-model="personaReferenciaPersonal.sexo"></base-input> <br>
        <label>Fecha de nacimiento</label> <br>
        <base-input type="date" v-model="personaReferenciaPersonal.fecha_nacimiento"></base-input> <br>
        <label>Cedula de identidad</label> <br>
        <base-input type="text" v-model="personaReferenciaPersonal.cedula"></base-input> <br>
        <label>Profesión</label> <br>
        <base-input type="text" v-model="personaReferenciaPersonal.profesion"></base-input> <br>
      </tab-content>

      <!-- Referencia Personal -->
      <tab-content id="tab-content" icon="fas fa-users icon-tab" :before-change="createReferPersonal">
        <p id="subtitle-form">Otras referencias</p>
        <label>Parentezco</label> <br>
        <base-input type="text" v-model="referenciaPersonal.parentezco"></base-input> <br>
        <label>Tiempo conocido</label> <br>
        <base-input type="date" v-model="referenciaPersonal.tiempo_conocido"></base-input> <br>
        <label>Teléfono</label> <br>
        <base-input type="text" v-model="referenciaPersonal.telefono"></base-input> <br>
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        personaEmpleado: {
          nombre: '',
          apellido: '',
          sexo: '',
          fecha_nacimiento: '',
          cedula: '',
          profesion: ''
          // correoPersonal: ''
        },

        usuario: {
          correo: '',
          password: '',
          acceso_usuario: 'Empleado',
          first_login: 0        
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

        departamento: {
          nombre_departamento: ''
        },

        salario: {
          salario_base: '',
          salario_ticket: '',
          salario_seguro: ''
          // fecha_inicio: '',
          // fecha_fin: '',
        },

        direccion: {
          id_persona: '',
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
          id_persona: '',
          id_empleado: '',
          parentezco: '',
          telefono: '',
          sexo: ''
        },

        personaReferenciaPersonal: {
          nombre: '', 
          apellido: '',
          sexo: '',
          fecha_nacimiento: '',
          cedula: '',
          profesion: '',
          // correoPersonal: ''
        },

        referenciaPersonal: {
          id_persona: '',
          id_empleado: '',
          parentezco: '',
          tiempo_conocido: '',
          telefono: ''
        }
      }
    },

    beforeMount () { 
      // modal de bienvenida

      if(this.$store.state.sexo == 'Femenino'){
        Swal.fire({
          type: 'info',
          title: '¡Bienvenida ninwebniana &#128526;!',
          text: 'Te hemos creado un perfil de empleado para usar nuestro sistema. Casi terminamos, solo falta completar esta información para continuar. Esto será una sola vez'
        })
        .then(() => {
          this.getData()     
        })
      }else{
        Swal.fire({
          type: 'info',
          title: '¡Bienvenido ninwebniano &#128526;!',
          text: 'Te hemos creado un perfil de empleado para usar nuestro sistema. Casi terminamos, solo falta completar esta información para continuar. Esto será una sola vez'
        })
        .then(() => {
          this.getData()        
        })
      }   
    },

    methods: {
      // obtencion de datos del empleado
      getData() {
        this.personaEmpleado.nombre = this.$store.state.personaData.nombre 
        this.personaEmpleado.apellido = this.$store.state.personaData.apellido
        this.personaEmpleado.sexo = this.$store.state.personaData.sexo
        this.personaEmpleado.fecha_nacimiento = this.$store.state.personaData.fecha_nacimiento
        this.personaEmpleado.cedula = this.$store.state.personaData.cedula
        this.personaEmpleado.profesion = this.$store.state.personaData.profesion

        this.usuario.correo = this.$store.state.usuarioLogeado.correo
        this.usuario.password = this.$store.state.usuarioLogeado.password
        this.usuario.acceso_usuario = this.$store.state.usuarioLogeado.acceso_usuario

        this.empleado.descripcion_cargo = this.$store.state.empleadoData.descripcion_cargo
        this.empleado.fecha_ingreso = this.$store.state.empleadoData.fecha_ingreso
        this.empleado.fecha_retirado = this.$store.state.empleadoData.fecha_retirado
        this.empleado.estado_empleado = this.$store.state.empleadoData.estado_empleado
        this.empleado.descripcion_transporte_ida = this.$store.state.empleadoData.descripcion_transporte_ida
        this.empleado.descripcion_transporte_vuelta = this.$store.state.empleadoData.descripcion_transporte_vuelta
        this.empleado.numero_habitacion = this.$store.state.empleadoData.numero_habitacion
        this.empleado.numero_celular = this.$store.state.empleadoData.numero_celular
        this.empleado.tipo_sangre = this.$store.state.empleadoData.tipo_sangre
        this.empleado.profesion = this.$store.state.empleadoData.profesion
        this.empleado.estado_civil = this.$store.state.empleadoData.estado_civil
        this.empleado.educacion = this.$store.state.empleadoData.educacion

        this.departamento.nombre_departamento = this.$store.state.departmentData.nombre_departamento

        this.salario.salario_base = this.$store.state.salarioData.salario_base
        this.salario.salario_ticket = this.$store.state.salarioData.salario_ticket
        this.salario.salario_seguro = this.$store.state.salarioData.salario_seguro

        this.direccion.id_persona = this.$store.state.id_usuario

        this.referenciaFamiliar.id_persona = this.$store.state.id_usuario
        this.referenciaFamiliar.id_empleado = this.$store.state.id_usuario

        this.referenciaPersonal.id_persona = this.$store.state.id_usuario
        this.referenciaPersonal.id_empleado = this.$store.state.id_usuario

      },

      updatePersonaEmpleadoData(){
        return new Promise((resolve, reject) => {
          axios.post('http://localhost:8000/api/personas/'+this.$store.state.id_usuario, this.personaEmpleado)
          .then(response => {
            console.log('personaEmpleado-success ', response)
            resolve(true)
          }).catch(error => {
            console.log('personaEmpleado ', error)
            reject(false)
          })
        })
      },

      updateEmpleadoData(){
        return new Promise((resolve, reject) => {
          axios.post('http://localhost:8000/api/empleados/'+this.$store.state.id_usuario, this.empleado)
          .then(response => {
            console.log('EmpleadoData-success ', response)
            resolve(true)
          }).catch(error => {
            console.log('EmpleadoData ', error)
            reject(false)
          })
        })
      },

      showSalaryToast(){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: true,
        })

        Toast.fire({
          type: 'info',
          title: 'Este es tu salario',
          background: 'linear-gradient(0deg, rgb(0,0,0) to rgb(56,56,56))'
        })
      },

      createDireccionData(){
        this.direccion.id_persona = this.$store.state.id_usuario

        return new Promise((resolve, reject) => {
          axios.post('http://localhost:8000/api/direcciones', this.direccion)
          .then(response => {
            console.log('createDireccionData-success ', response)
            resolve(true)
          }).catch(error => {
            console.log('createDireccionData ', error)
            reject(false)
          })
        })
      },

      createPersonaReferFamiliar(){
        return new Promise((resolve, reject) => {
          axios.post('http://localhost:8000/api/personas', this.personaReferenciaFamiliar)
          .then(response => {
            console.log('createPersonaReferFamiliar-success ', response)
            resolve(true)
          }).catch(error => {
            console.log('createPersonaReferFamiliar ', error)
            reject(false)
          })
        })
      },

      createReferFamiliar(){
        this.referenciaFamiliar.id_persona = this.$store.state.id_usuario
        this.referenciaFamiliar.id_empleado = this.$store.state.id_usuario

        return new Promise((resolve, reject) => {
          axios.post('http://localhost:8000/api/familiares', this.referenciaFamiliar)
          .then(response => {
            console.log('createReferFamiliar-success ', response)
            resolve(true)
          }).catch(error => {
            console.log('createReferFamiliar ', error)
            reject(false)
          })
        })
      },

      createPersonaReferPersonal(){
        return new Promise((resolve, reject) => {
          axios.post('http://localhost:8000/api/personas', this.personaReferenciaFamiliar)
          .then(response => {
            console.log('createPersonaReferPersonal-success ', response)
            resolve(true)
          }).catch(error => {
            console.log('createPersonaReferPersonal ', error)
            reject(false)
          })
        })
      },

      createReferPersonal(){
        this.referenciaPersonal.id_persona = this.$store.state.id_usuario
        this.referenciaPersonal.id_empleado = this.$store.state.id_usuario

        return new Promise((resolve, reject) => {
          axios.post('http://localhost:8000/api/personas', this.personaReferenciaPersonal)
          .then(response => {
            console.log('createReferPersonal-success ', response)
            resolve(true)
          }).catch(error => {
            console.log('createReferPersonal ', error)
            reject(false)
          })
        })
      },

      finishProcess(){
        return new Promise((resolve, reject) => {
          axios.post('http://localhost:8000/api/usuarios'+this.$store.state.id_usuario, this.usuario)
          .then(response => {
            console.log('createReferPersonal-success ', response)
            resolve(true)

            Swal.fire({
              type: 'info',
              title: '¡Cool &#129311;!',
              text: 'Tu información fue almacenada con éxito. Ya puedes ingresar a nuestro sistema.'
            })
          }).catch(error => {
            console.log('createReferPersonal ', error)
            reject(false)
          })
        })
      }
    },

    computed: { //metodos computados los cuales se ejecutan en segundo plano
      ...mapState([
        'empleadoData',
        'personaData',
        'departmentData',
        'salarioData'
      ])
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

  #complete {
    padding: 30px 0;
  }

  .tab-content {
    width: 50%;
    margin: 0 auto;
  }

  #subtitle-form {
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    margin: 20px 0;
  }

  /* .vue-form-wizard .wizard-nav-pills > li{
    display: block;
    box-orient: horizontal;
  } */
</style>