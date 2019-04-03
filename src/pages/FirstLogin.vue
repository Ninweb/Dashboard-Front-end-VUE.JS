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
        <base-input type="text" v-model="personaEmpleado.nombre"></base-input> <br>
        <label>Apellido</label> <br>
        <base-input type="text" v-model="personaEmpleado.apellido"></base-input> <br>
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
      <tab-content class="tab-content" icon="fas fa-user-tie icon-tab">
        <p id="subtitle-form">Datos del empleado</p>
        <label>Departamento</label> <br>
        <base-input type="text" v-model="departamento.nombre_departamento"></base-input> <br>
        <label>Descripción del cargo</label> <br>
        <base-input type="text" v-model="empleado.descripcion_cargo"></base-input> <br>
        <label>Fecha de ingreso</label> <br>
        <base-input type="date" v-model="empleado.fecha_ingreso"></base-input> <br>
        <label>Estatus del empleado</label> <br>
        <base-input type="text" v-model="empleado.estado_empleado"></base-input> <br>
        <label>Descripción de la ruta hogar - oficina</label> <br>
        <base-input type="text" v-model="empleado.descripcion_transporte_ida"></base-input> <br>
        <label>Descripción de la ruta oficina - hogar</label> <br>
        <base-input type="text" v-model="empleado.descripcion_transporte_vuelta"></base-input> <br>
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
      <tab-content class="tab-content" icon="fas fa-dollar-sign icon-tab">
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

      <!-- Direccion -->
      <tab-content class="tab-content" icon="fas fa-map-marked-alt icon-tab">
        <p id="subtitle-form">Dirección del empleado</p>
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

      <!-- Persona - referencia familiar -->
      <tab-content class="tab-content" icon="fas fa-user icon-tab">
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
      <tab-content class="tab-content" icon="fas fa-users icon-tab">
        <p id="subtitle-form">Referencia familiar</p>
        <label>Parentezco</label> <br>
        <base-input type="text" v-model="referenciaFamiliar.parentezco"></base-input> <br>
        <label>Teléfono</label> <br>
        <base-input type="date" v-model="referenciaFamiliar.telefono"></base-input> <br>
        <label>Sexo</label> <br>
        <base-input type="text" v-model="referenciaFamiliar.sexo"></base-input> <br>
      </tab-content>

      <!-- Persona - referencia Personal -->
      <tab-content class="tab-content" icon="fas fa-user icon-tab">
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
      <tab-content id="tab-content" icon="fas fa-users icon-tab">
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
          nombre: this.$store.state.personaData.nombre, 
          apellido: this.$store.state.personaData.apellido,
          sexo: this.$store.state.personaData.sexo,
          fecha_nacimiento: this.$store.state.personaData.fecha_nacimiento,
          cedula: this.$store.state.personaData.cedula,
          profesion: this.$store.state.personaData.profesion,
          // correoPersonal: ''
        },

        empleado: {
          descripcion_cargo: this.$store.state.empleadoData.descripcion_cargo,
          fecha_ingreso: this.$store.state.empleadoData.fecha_ingreso,
          fecha_retirado: this.$store.state.empleadoData.fecha_retirado,
          estado_empleado: this.$store.state.empleadoData.estado_empleado,
          descripcion_transporte_ida: this.$store.state.empleadoData.descripcion_transporte_ida,
          descripcion_transporte_vuelta: this.$store.state.empleadoData.descripcion_transporte_vuelta,
          numero_habitacion: this.$store.state.empleadoData.numero_habitacion,
          numero_celular: this.$store.state.empleadoData.numero_celular,
          tipo_sangre: this.$store.state.empleadoData.tipo_sangre,
          profesion: this.$store.state.empleadoData.profesion,
          estado_civil: this.$store.state.empleadoData.estado_civil,
          educacion: this.$store.state.empleadoData.educacion
        },

        departamento: {
          nombre_departamento: this.$store.state.departmentData.nombre_departamento
        },

        salario: {
          salario_base: this.$store.state.salarioData.salario_base,
          salario_ticket: this.$store.state.salarioData.salario_ticket,
          salario_seguro: this.$store.state.salarioData.salario_seguro,
          // fecha_inicio: this.$store.state.salarioData.fecha_inicio,
          // fecha_fin: this.$store.state.salarioData.fecha_fin 
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
      // obtencion de datos del empleado
      this.$store.dispatch('getEmployer')
      this.$store.dispatch('getPersona')
      this.$store.dispatch('getDepartamento')
      this.$store.dispatch('getDepartamentos')
      this.$store.dispatch('getSalary')
      
      
      // var sexo = JSON.stringify(this.$store.state.personaData.sexo)
      // modal de bienvenida
      console.log('sexo', this.$store.state.personaData.sexo)
      console.log('nombre ', this.$store.state.personaData.nombre)
      if(this.$store.state.sexo == 'Femenino'){
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
    },

    computed: mapState([//metodos computados los cuales se ejecutan en segundo plano
      'empleadoData',
      'personaData',
      'departmentData',
      'salarioData'
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

  /* .vue-form-wizard .wizard-nav-pills > li{
    display: block;
    box-orient: horizontal;
  } */
</style>