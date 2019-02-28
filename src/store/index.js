import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


const store = new Vuex.Store({
  state:{ //= data
    usuarioLogeado: '',
    acceso_usuario: '',
    token: '',
    status: ''
  },

  getters:{ // = compuedd properties
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
  },

  mutations:{
    // toda funcion debe tener nombreFuncion(state , parametros ...)
    authSuccess(state, token){
      state.token = token
      state.status = 'success'
    },

    authError(state){
      state.token = ''
      state.status = 'error'
    }
  },

  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/login', payload)
        .then(response => { 
          if(response.data.status == "error"){
            this.error.informacion = response.data.message;
            if(response.data.message == "Correo no valido"){
              this.error.correo = true
              this.error.password = false
            }else{
              this.error.correo = false
              this.error.password = true
            }
            this.cargando = false;
          }else if (response.data.usuario.acceso_usuario == "admin"){
            let access_token = response.data.usuario.api_token;
            context.commit('authSuccess', access_token)

            this.state.acceso_usuario = response.data.usuario.acceso_usuario
            this.state.usuarioLogeado = response.data

            let usuarioLogeado = response.data;
            console.log(usuarioLogeado)

            localStorage.setItem('usuarioLogeado', JSON.stringify(usuarioLogeado));
            localStorage.setItem('token', access_token)
            axios.defaults.headers.common['Authorization'] = "Bearer " + window.token

            resolve(response)
          }
        })
        .catch(error => {
          localStorage.removeItem('token')
          context.commit('authError')
          console.log(error)
          reject(response)
        });
      })
    },

    logout(context){
      return new Promise((resolve, reject) => {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']

        resolve()
      })
    }
  }
})

export default store