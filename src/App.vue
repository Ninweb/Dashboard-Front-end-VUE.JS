<template lang="pug">
  #app

    //- Header
    nin-header

    //- Main page - Login
    div#login
      div.card
        .card-header
          p Login

        .card-body
          form(v-on:submit.prevent="handleLoginFormSubmit()")
            .form-group
              label Correo electrónico
              input.form-control(type="email", v-model="login.email")

            .form-group
              label Contraseña
              input.form-control(type="password", v-model="login.password")

            button.btn.btn-primary(type="submit") Ingresar

    //- Admin View
</template>


<script>
// import NinHeader from './components/layout/Header.vue'
import DashboardAdmin from './components/admin/DashboardAdmin.vue'
import DashboardUser from './components/user/DashboardUser.vue'
import axios from 'axios'
import routes from './routes'

import {apiDomain, loginUrl, userUrl, getHeader} from './services/config'
import vars from './env'

export default {
  name: 'app',
  routes,

  components: { DashboardUser, DashboardAdmin },

  data () {
    return {
      login : {
        email: '',
        password: '',
        access: ''
      },
      admin : {
        email: 'lab@ninweb.net',
        password: '1234',
        access: 'admin'
      },
      user : {
        email: 'user@ninweb.net',
        password: '1234',
        access: 'user'
      }
    }
  },

  /*methods: {
    handleLoginFormSubmit() {
      const postData = {
        grant_type: 'password',
        client_id: vars.clientId,
        client_secret: vars.clientSecret,
        username: this.login.email,
        password: this.login.password,
        scope: '',
      }

      const authUser = {
        email: '',
        name: ''
      }

      axios.post(loginUrl, postData).then(
        response => {
          if (response.status === 200){
            console.log('Oauth token', response)
            authUser.access_token = response.data.access_token
            authUser.refresh_token = response.data.refresh_token
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
            axios.get(userUrl, {headers: getHeader()}).then(
              response => {
                console.log('user object', response)
                authUser.email = response.data.email
                authUser.name = response.data.name
                window.localStorage.setItem('authUser', JSON.stringify(authUser))
              })
          }
        },error => {
          console.log(error)
        }
      )
    }
  }*/

  mounted () {
    const postData = {
      grant_type: 'password',
      client_id: 2,
      client_secret: 'pQsniKI6uuewByBy0RiSdg76j7EBUz1WNKJEbDM0',
      username: 'lab@ninweb.net',
      password: 'password',
      scope: '',
    }
    // Conectando con API
    axios.get('http://127.0.0.1:8000/api/test')
    .then(res => {
        this.info = res
        console.log(res)
      }, error => {
        this.info = error
        console.log(error)
      }
    )
  }

}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

#login {
  // background: #222;
  color: white;
  height: 100vh;

  .card {
    width: 80%;
    margin: 0 auto;
      color: black;

    .card-header {
      background: grey;
      color: black;
    }
  }
}
</style>
