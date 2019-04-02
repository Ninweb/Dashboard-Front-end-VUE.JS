<template>
  <div id="complete">
    <form-wizard
      shape="circle" 
      color="#1B3F65" 
      next-button-text="Siguiente"
      back-button-text="Anterior"
      finish-button-text="Completar">

      <!-- Persona - empleado -->
      <tab-content class="tab-content" icon="fas fa-user icon-tab">
        <p id="subtitle-form">Datos personales del empleado</p>
        <label>Nombre</label> <br>
        <input type="text" v-model="personaEmpleado.nombre" value="this.$store.state.personaData.nombre"/><br>
        <label>Apellido</label> <br>
        <input type="text" v-model="personaEmpleado.apellido" value="this.$store.state.personaData.apellido"/> <br>
        <label>Sexo</label> <br>
        <input type="text" v-model="personaEmpleado.sexo" value="this.$store.state.personaData.sexo"/>
        <label>Fecha de nacimiento</label> <br>
        <input type="date" v-model="personaEmpleado.fecha_nacimiento" value="this.$store.state.personaData.fecha_nacimiento"/>
        <label>Cedula de identidad</label> <br>
        <input type="text" v-model="personaEmpleado.cedula" value="this.$store.state.personaData.cedula"/>
        <label>Profesión</label> <br>
        <input type="text" v-model="personaEmpleado.profesion" value="this.$store.state.personaData.profesion"/>
      </tab-content>

      <!-- Empleado -->
      <tab-content class="tab-content" icon="fas fa-user-tie icon-tab">
        <p id="subtitle-form">Datos del empleado</p>
        <label>Descripción del cargo</label> <br>
        <input type="text" v-model="empleado.descripcion_cargo"/>
        <label>Fecha de ingreso</label> <br>
        <input type="date" v-model="empleado.fecha_ingreso"/>
        <label>Estatus del empleado</label> <br>
        <input type="text" v-model="empleado.estado_empleado"/>
        <label>Descripción de la ruta hogar - oficina</label> <br>
        <input type="text" v-model="empleado.descripcion_transporte_ida"/>
        <label>Descripción de la ruta oficina - hogar</label> <br>
        <input type="text" v-model="empleado.descripcion_transporte_vuelta"/>
        <label>Número de habitación</label> <br>
        <input type="text" v-model="empleado.numero_habitacion"/>
        <label>Número de celular</label> <br>
        <input type="text" v-model="empleado.numero_celular"/>
        <label>Tipo de sangre</label> <br>
        <input type="text" v-model="empleado.tipo_sangre"/>
        <label>Profesión</label> <br>
        <input type="text" v-model="empleado.profesion"/>
        <label>Estado civil</label> <br>
        <input type="text" v-model="empleado.estado_civil"/>
        <label>Educación</label> <br>
        <input type="text" v-model="empleado.educacion"/>
      </tab-content>

      <!-- Salario -->
      <tab-content class="tab-content" icon="fas fa-dollar-sign icon-tab">
        <p id="subtitle-form">Sueldo del empleado</p>
        <label>Sueldo base</label> <br>
        <input type="text" v-model="salario.salario_base"/>
        <label>Cesta Ticket</label> <br>
        <input type="date" v-model="salario.salario_ticket"/>
        <label>Seguro</label> <br>
        <input type="text" v-model="salario.salario_seguro"/>
        <label>Fecha de inicio del sueldo</label> <br>
        <input type="date" v-model="salario.fecha_inicio"/>
      </tab-content>

      <!-- Direccion -->
      <tab-content class="tab-content" icon="fas fa-map-marked-alt icon-tab">
        <p id="subtitle-form">Dirección del empleado</p>
        <label>Parroquia</label> <br>
        <input type="text" v-model="direccion.parroquia"/>
        <label>Município</label> <br>
        <input type="date" v-model="direccion.municipio"/>
        <label>Alcaldía</label> <br>
        <input type="text" v-model="direccion.alcaldia"/>
        <label>Ciudad</label> <br>
        <input type="date" v-model="direccion.ciudad"/>
        <label>Zona</label> <br>
        <input type="date" v-model="direccion.zona"/>
      </tab-content>

      <!-- Persona - referencia familiar -->
      <tab-content class="tab-content" icon="fas fa-user icon-tab">
        <p id="subtitle-form">Datos de la persona - familiar a referenciar</p>
        <label>Nombre</label> <br>
        <input type="text" v-model="personaReferenciaFamiliar.nombre"/>
        <label>Apellido</label> <br>
        <input type="text" v-model="personaReferenciaFamiliar.apellido"/>
        <label>Sexo</label> <br>
        <input type="text" v-model="personaReferenciaFamiliar.sexo"/>
        <label>Fecha de nacimiento</label> <br>
        <input type="date" v-model="personaReferenciaFamiliar.fecha_nacimiento"/>
        <label>Cedula de identidad</label> <br>
        <input type="text" v-model="personaReferenciaFamiliar.cedula"/>
        <label>Profesión</label> <br>
        <input type="text" v-model="personaReferenciaFamiliar.profesion"/>
      </tab-content>

      <!-- Referencia familiar -->
      <tab-content class="tab-content" icon="fas fa-users icon-tab">
        <p id="subtitle-form">Referencia familiar</p>
        <label>Parentezco</label> <br>
        <input type="text" v-model="referenciaFamiliar.parentezco"/>
        <label>Teléfono</label> <br>
        <input type="date" v-model="referenciaFamiliar.telefono"/>
        <label>Sexo</label> <br>
        <input type="text" v-model="referenciaFamiliar.sexo"/>
      </tab-content>

      <!-- Persona - referencia Personal -->
      <tab-content class="tab-content" icon="fas fa-user icon-tab">
        <p id="subtitle-form">Datos de la persona - tercera a referenciar</p>
        <label>Nombre</label> <br>
        <input type="text" v-model="personaReferenciaPersonal.nombre"/>
        <label>Apellido</label> <br>
        <input type="text" v-model="personaReferenciaPersonal.apellido"/>
        <label>Sexo</label> <br>
        <input type="text" v-model="personaReferenciaPersonal.sexo"/>
        <label>Fecha de nacimiento</label> <br>
        <input type="date" v-model="personaReferenciaPersonal.fecha_nacimiento"/>
        <label>Cedula de identidad</label> <br>
        <input type="text" v-model="personaReferenciaPersonal.cedula"/>
        <label>Profesión</label> <br>
        <input type="text" v-model="personaReferenciaPersonal.profesion"/>
      </tab-content>

      <!-- Referencia Personal -->
      <tab-content id="tab-content" icon="fas fa-users icon-tab">
        <p id="subtitle-form">Otras referencias</p>
        <label>Parentezco</label> <br>
        <input type="text" v-model="referenciaPersonal.parentezco"/>
        <label>Tiempo conocido</label> <br>
        <input type="date" v-model="referenciaPersonal.tiempo_conocido"/>
        <label>Teléfono</label> <br>
        <input type="text" v-model="referenciaPersonal.telefono"/>
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

    mounted () {
      // modal de bienvenida
      if(this.$store.state.sexo === 'Femenino'){
        Swal.fire({
          type: 'info',
          title: '¡Bienvenida ninwebniana &#128526;!',
          text: 'Te hemos creado un perfil de empleado para usar nuestro sistema. Casi terminamos, solo falta completar esta información para continuar. Esto será una sola vez'
        })
      }else{
        Swal.fire({
          type: 'info',
          title: '¡Bienvenido ninwebniano &#128526;!',
          text: 'Te hemos creado un perfil de empleado para usar nuestro sistema. Casi terminamos, solo falta completar esta información para continuar. Esto será una sola vez'
        })
      }    

      // obtencion de datos del empleado
      this.$store.dispatch('getEmployer')
      this.$store.dispatch('getPersona')
    },

    computed: mapState([//metodos computados los cuales se ejecutan en segundo plano
      'empleadoData',
      'personaData'
    ])
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

  input {
    width: 100%;
    padding: 0.5rem 0.7rem;
    background: transparent;
    color: white;
    border-color: #1b64a8;
    border-radius: 0.4285rem;
    font-size: 0.75rem;
  }

  /* .vue-form-wizard .wizard-nav-pills > li{
    display: block;
    box-orient: horizontal;
  } */
</style>