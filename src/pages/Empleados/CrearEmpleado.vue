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
        <form-wizard shape="circle" color="#1B3F65">
          <tab-content icon="fas fa-user">
            <label>Nombre</label> <br>
            <base-input type="text" v-model="nombre"></base-input> <br>
            <label>Apellido</label> <br>
            <base-input type="text" v-model="apellido" @keyup="createEmail"></base-input> <br>
            <label>Cedula de identidad</label> <br>
            <base-input type="text" v-model="cedula"></base-input> <br>
            <label>Fecha de nacimiento</label> <br>
            <base-input type="text" v-model="nacimiento"></base-input> <br>
            <label>Sexo</label> <br>
            <base-input type="text" v-model="sexo"></base-input> <br>
            <label>Profesión</label> <br>
            <base-input type="text" v-model="profesion"></base-input> <br>
            <label>Email personal</label> <br>
            <base-input type="text" v-model="correoPersonal"></base-input> <br>
            <label>Contraseña</label> <br>
            <base-input type="password" v-model="pass"></base-input> <br>
          </tab-content>

          <tab-content>
            My second tab content
          </tab-content>

          <tab-content >
            Yuhuuu! This seems pretty damn simple
          </tab-content>

          <!-- <div class="wizard-footer-left">
            <wizard-button 
              v-if="props.activeTabIndex > 0 && !props.isLastStep" 
              @click.native="props.prevTab()" 
              :style="props.fillButtonStyle">Anterior</wizard-button>
          </div>
          <div class="wizard-footer-right">
            <wizard-button 
              v-if="!props.isLastStep"@click.native="props.nextTab()" 
              class="wizard-footer-right" 
              :style="props.fillButtonStyle">Siguiente</wizard-button>

            <wizard-button 
              v-else @click.native="alert('Done')" 
              class="wizard-footer-right finish-button" 
              :style="props.fillButtonStyle"> {{props.isLastStep ? 'Crear usuario' : 'Siguiente'}}</wizard-button>
          </div> -->
        </form-wizard>
      </div>

      <div class="col-md-6">
        <card class="ficha">
          Nombre: {{this.nombre}} <br><br>
          Apellido: {{this.apellido}} <br><br>
          Cédula de identidad: {{this.cedula}} <br><br>
          Fecha de nacimiento: {{this.nacimiento}} <br><br>
          Sexo: {{this.sexo}} <br><br>
          Profesión: {{this.profesion}} <br><br>
          Email personal: {{this.correoPersonal}} <br>
          <hr>
          Email empresarial: {{this.correoEmpresarial}}@ninweb.net<br><br>
          Contraseña: {{this.passMsg}} <br><br>
          Status: {{this.newUser}}
        </card>

        <div id="info">
          Por favor, verifíque la información ingresada en el formulario antes de hacer click en <b>Crear usuario</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newUser: 1,
      passMsg: 'La que ingreso',

      nombre: '',
      apellido: '',
      cedula: '',
      nacimiento: '',
      sexo: '',
      profesion: '',
      correoPersonal: '',

      correoEmpresarial: '',
      pass: ''
    }
  },

  methods: {
    createEmail () {
      this.nombre.toLowerCase()
      var firstLetter = this.nombre.charAt(0)
      this.correoEmpresarial = firstLetter + this.apellido
    }
  },

  // mounted() {
  //   axios.post('')
  // }
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
</style>
