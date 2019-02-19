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
        <form>
          <label>Nombre</label> <br>
          <base-input type="text" v-model="nombre"></base-input> <br>
          <label>Apellido</label> <br>
          <base-input type="text" v-model="apellido" @mouseleave="createEmail"></base-input> <br>
          <label>Email personal</label> <br>
          <base-input type="text" v-model="correoPersonal"></base-input> <br>
          <label>Contraseña</label> <br>
          <base-input type="password" v-model="pass"></base-input> <br>

          <div class="row justify-content-center align-items-center">
            <base-button slot="footer" class="prueba" fill>Crear usuario</base-button>
          </div>
        </form>
      </div>

      <div class="col-md-6">
        <card class="ficha">
          Nombre: {{this.nombre}} <br><br>
          Apellido: {{this.apellido}} <br><br>
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
</style>
