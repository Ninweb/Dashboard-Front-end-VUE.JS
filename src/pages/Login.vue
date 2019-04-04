<template>
  <div>
    <div class="login-form ">

      <form class="form row" v-on:submit.prevent="login">
        <div class="avatar">
          <img src="img/login-logo.png" alt="Avatar">
        </div>           
        <div class="grupo col-md-12">
          <div class="row">
            <div class="form-group  col-md-12" >
              <div class="errores" v-if="error.correo">
                <p>{{error.informacion}}</p>
              </div>
              <input type="text" class="form-control input-lg" v-model="usuario.correo" name="correo" placeholder="Correo" required="required">	
            </div>
            <div class="form-group col-md-12" >
              <div class="errores" v-if="error.password">
                <p>{{error.informacion}}</p>
              </div>
              <input type="password" class="form-control input-lg" name="password" v-model="usuario.password" placeholder="Contraseña" required="required">
            </div>        
            <div class="form-group col-md-12">
              <div class="container-fluid">
                <div class="row">
                  <br>
                  <div class="offset-md-4">
                    <button type="submit" class="btn btn-lg col-md-12 align-middle" v-if="!cargando">Entrar</button>
                  </div>
                  <div class="lds-dual-ring offset-md-1" v-if="cargando"></div>
                </div>
              </div>
            </div>
            <div class="recuperarContraseña col-md-12">¿Olvidaste tu contraseña? <a href="#">Recupera tu contraseña</a></div> 
          </div>    
        </div>    
      </form>
    </div>
  </div>  
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    data(){
      return {
        usuario: {
          correo: '',
          password: ''
        },

        cargando: false,

        error: {
          correo:false,
          password:false,
          informacion:''
        }
      }
    
    },

    methods: {
      login(){
        this.cargando = true;

        this.$store.dispatch('login', {
          correo: this.usuario.correo,
          password: this.usuario.password   
        }).then((response) => {
          this.$store.dispatch('getEmployer')
          this.$store.dispatch('getPersona')
          this.$store.dispatch('getDepartamento')
          this.$store.dispatch('getDepartamentos')
          this.$store.dispatch('getSalary')
          
          if (this.first == '0') {
            // console.log('dash-first', this.first)
            this.$router.push({ 
              name:'dashboard', 
              params: this.usuario
            })
            // this.allowed = true
          }else{
            // console.log('primera-first', this.first)
            this.$router.push({ 
              name:'complete', 
              params: this.usuario
            })
            // this.allowed = false
          }
          
        })
      }
    },

    computed: {
      // access(){
      //   return this.$store.getters.access
      // },

      ...mapState(['usuarioLogeado', 'first'])
    }
  }
</script>

<style>
  body {
  /* background-image:url('../../public/img/fondoLogin.jpg'); */
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
	}
  .form{
    color: #ffffff!important;
    position: relative;
    top: 200px;
    height:360px!important;
  }
  .hint-text{
    position: relative;
    top: -90px;
    color: #ffffff!important;
  }
  .btn{
    background: #111!important;
    border: 1px solid #1b64a8!important;
    padding: 5px!important;
  }
  .btn:hover{
    background: #cccccc!important;
  }
  a {
    color: #1b64a8!important;
    font-style:initial;
    font-weight: 600!important;
  }
  .form-control {
    font-size: 16px;
    border-color: transparent;
    box-shadow: none !important;
    border-color: #1b64a8!important;
	}
	.form-control:focus {
		border-color: #05dfa9!important;
       
	}
  .form-control, .btn {        
    border-radius: 2px;
  }
	.login-form {
		width: 380px;
		margin: 0 auto;
	}
  .login-form h2 {
    margin: 0;
    padding: 30px 0;
    font-size: 34px;
  }
	.login-form .avatar {
		margin: 0 auto 30px;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		z-index: 9;
		background: #1b64a8;
    border: 1px solid #1b64a8 !important;
    position: relative;
    top: -100px;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
	}
	.login-form .avatar img {
		width: 100%;
	}
  .login-form form {
    color: #7a7a7a;
    border-radius: 4px;
    margin-bottom: 20px;
    background: rgba(19, 19, 19, 0.9)!important;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;		
  }
  .login-form .btn {
    font-size: 16px;
    line-height: 26px;
    min-width: 120px;
    font-weight: bold;
    background: #1b64a8;
    border: none;		
  }
	.login-form .btn:hover, .login-form .btn:focus{
		border-color: #05dfa9!important;
    background: #111!important;
    outline: none !important;
	}
	.checkbox-inline {
		margin-top: 14px;
	}
	.checkbox-inline input {
		margin-top: 3px;
	}
  .login-form a {
    color: #1b64a8;
	}	
	.login-form a:hover {
		text-decoration: underline;
	}
	.recuperarContraseña{
		color: #ffffff;
    text-align: center;
	}
  .grupo{
    position: relative;
    top: -100px!important;
  }
    
  .errores p{
    color: #ac1b2f!important;
  }
  .lds-dual-ring {
    display: inline-block;
    width: 64px;
    height: 64px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #1b64a8;
    border-color: #1b64a8 transparent #1b64a8 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
