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
        <form-wizard shape="circle" color="#1B3F65" background="red">
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
            <!-- <label>Email personal</label> <br>
            <base-input type="text" v-model="persona.correoPersonal"></base-input> -->
          </tab-content>

          <tab-content icon="fas fa-key icon-tab">
            <label>Email empresarial</label> <br>
            <base-input type="text" v-model="usuario.correoEmpresarial"></base-input> <br>
            <label>Contraseña</label> <br>
            <base-input type="password" v-model="usuario.pass"></base-input> <br>
          </tab-content>

          <tab-content icon="fas fa-check-circle icon-tab">
            Por favor verifíque la información y haga click en <b>Crear usuario</b>
          </tab-content>

          <div slot="footer" slot-scope="props">
            <div class="wizard-footer-left">
              <wizard-button 
                v-if="props.activeTabIndex > 0 && !props.isLastStep" 
                @click.native="props.prevTab()" 
                :style="props.fillButtonStyle">Anterior</wizard-button>
            </div>
            <div class="wizard-footer-right">
              <wizard-button 
                v-if="!props.isLastStep" @click.native="props.nextTab()" 
                class="wizard-footer-right" 
                :style="props.fillButtonStyle">Siguiente</wizard-button>

              <wizard-button 
                v-else @click.native="alert('Done')" 
                class="wizard-footer-right finish-button" 
                :style="props.fillButtonStyle"> {{props.isLastStep ? 'Crear usuario' : 'Siguiente'}}</wizard-button>
            </div>
          </div>

          
        </form-wizard>
      </div>

      <div class="col-md-6 main-verify">
        <div id="verify">
          <card class="ficha">
            Nombre: {{this.persona.nombre}} <br><br>
            Apellido: {{this.persona.apellido}} <br><br>
            Sexo: {{this.persona.sexo}} <br><br>
            Fecha de nacimiento: {{this.persona.fecha_nacimiento}} <br><br>
            Cédula de identidad: {{this.persona.cedula}} <br><br>
            Profesión: {{this.persona.profesion}} <br><br>
            <!-- Email personal: {{this.persona.correoPersonal}} <br> -->
            <hr>
            Email empresarial: {{this.usuario.correoEmpresarial}}@ninweb.net<br><br>
            Contraseña: {{this.passMsg}} <br><br>
            Status: {{this.newUser}}
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
      newUser: 1,
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
        correoEmpresarial: '',
        password: '',
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
      this.persona.nombre.toLowerCase()
      var firstLetter = this.persona.nombre.charAt(0)
      this.usuario.correoEmpresarial = firstLetter + this.persona.apellido
    },

    crearPersona: function () {
      // console.log(this.$store.state.token)
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/personas', this.persona).then(response => {
          // console.log(response)
          resolve(response)
          return true
        }).catch(error => {
          reject(error)
          // console.log(error)
          return false
        })
      })

      
    },

    crearUsuario () {
      
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
