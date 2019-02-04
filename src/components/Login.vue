<template lang="pug">
  #login
    #logo
      img(src="../assets/login-logo.png")

    form(v-on:submit.prevent="loginAPI")
      #fields
        .form-group
          i.fas.fa-at
          input.form-control(type="email", placeholder="Correo electrónico", v-model="usuario.correo")

        .form-group
          i.fas.fa-key
          input.form-control(type="password", placeholder="Contraseña",v-model="usuario.password")

      button.btn.btn-primary(type="submit") Ingresar

    #info
      p.forgot ¿Olvidó su contraseña?
      p.copyright © Copyright 2019 - NINWEB, C.A.
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      usuario: {
        correo: '',
        password: ''
      }
    }
   
  },
  methods: {
    loginAPI(){
      //const axios = require('axios');
      console.log(this.usuario);
      this.$http.post('http://localhost:8000/api/login',{
        correo: this.usuario.correo,
        password: this.usuario.password   
      })
        .then(response => { 
          console.log(response)
          if (response.body.usuario.acceso_usuario == "admin"){
              let token = response.body.usuario.api_token;
              let usuarioLogeado = response.body;
              localStorage.setItem('token',token);
              localStorage.setItem('usuarioLogeado',JSON.stringify(usuarioLogeado));
              //console.log(usuarioLogeado)

              //console.log(token);
              
              this.$router.push({ 
                path:'dashboard/admin', 
                params: this.usuario
              })
          }
          
        })
        .catch(error => {
            console.log(error.response)
        });

    }
  }

}
</script>

<style lang="scss">
@import "../utils/variables.scss";

#login {
  padding: 13% 0;
  height: 100vh;
  background: $transparent-background;
  position: relative;

  #logo {
    position: relative;

    img {
      position: absolute;
      top: -70px;
      left: 45%;
      box-shadow: $shadow-box-loginImg;
      border-radius: 50%;
    }
  }

  form {
    width: 30%;
    margin: 0 auto;
    padding: 20px 0;
    // border: 2px solid $nin-black;
    border-radius: 20px;
    box-shadow: $shadow-box-loginForm;
    background: white;

    #fields {
      margin-top: 60px;
    }

    .form-group {
      display: flex;
      width: 70%;
      margin: 0 auto;
      padding: 10px 0;
    }

    i {
      background: $nin-redDesactivated;
      width:30%;
      text-align:center;
      font-size: 16px;
      padding-top: 10px;
      color: white;
    }

    input {
      border-radius: 0;
    }

    button {
      background: $nin-redDesactivated;
      display:flex;
      align-content: center;
      justify-content:center;
      border: none;
      margin: 10px auto;

      &:hover {
        background: $nin-redActivated;
      }
    }
  }

  #info {
    text-align: center;
    color: white;
    margin-top: 30px;

    p {margin: 0}

    .forgot {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 20px;
    }
    .copyright {
      font-size: 16px;
    }
  }
}
</style>
