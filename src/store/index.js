import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


const store = new Vuex.Store({
  state:{ //= data
    token: localStorage.getItem('token') || '',
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
            let api_token = response.data.usuario.api_token;
            context.commit('authSuccess', token)

            let usuarioLogeado = response.data;
            console.log(usuarioLogeado)

            // localStorage.setItem('usuarioLogeado', JSON.stringify(usuarioLogeado));
            localStorage.setItem('token', api_token)
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

    // logout(context){

    // }
  }
})

export default store