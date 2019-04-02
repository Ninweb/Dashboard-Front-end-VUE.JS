import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


const store = new Vuex.Store({
  state:{ //= data
    status: '',

    usuarioLogeado: '',
    token: '',
    acceso_usuario: '',
    first: '',

    empleadoData: '',
    id_persona: '',

    personaData: '',
    sexo: '',

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
          }

          let usuarioLogeado = response.data.usuario

          context.commit('authSuccess', usuarioLogeado)

          localStorage.setItem('usuarioLogeado', JSON.stringify(usuarioLogeado));
          localStorage.setItem('token', usuarioLogeado.api_token)

          resolve(response)
        })
        .catch(error => {
          localStorage.removeItem('token')
          context.commit('authError')
          console.log(error)
          reject(response)
        });
      })
    },

    getPersona({ commit }){
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8000/api/personas/'+this.state.id_persona)
          .then((response) => {
            console.log('persona', response.data)
            // var idPersona = JSON.stringify(this.$store.state.id_persona)
            // console.log('idid', idPersona)
            let persona = response.data[this.state.id_persona-1];
            // console.log('persona', this.persona);

            commit('personData', persona)
            this.cargando = false
            resolve(response)
          })
          .catch(err => {
            console.log(err)
            reject(response)
          });
      })
    },    

    getEmployer({ commit }){
      console.log('userlogeado-employer1', this.state.usuarioLogeado)      
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8000/api/usuario/empleados/'+this.state.usuarioLogeado.id)
          .then((response) => {
            console.log('response-employer', response)
            console.log('userlogeado-employer2', this.state.usuarioLogeado)
            let empleado = response.data[0];
            
            commit('employerData', empleado)

            console.log('empleado', this.state.empleadoData)
            console.log('id-ersona', this.state.id_persona)

            resolve(response)
          })
          .catch(error => {
            reject(response)
            console.log(error)
          });
      })
    },

    // getDepartamento({ commit }){
    //   return new Promise((resolve, reject) => {
    //     axios.get('http://localhost:8000/api/departamentos/'+this.state.usuarioLogeado.id)
    //     .then((response) => {
    //       let departamento = response.data.nombre_departamento
    //       comm
    //     })
    //   })
    // },

    logout(context){
      return new Promise((resolve, reject) => {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']

        resolve()
      })
    }
  },  

  getters:{ // = compuedd properties
    // access(state){
    //   return state.usuarioLogeado
    // }
  },

  mutations:{
    // toda funcion debe tener nombreFuncion(state , parametros ...)
    authSuccess(state, usuarioLogeado){
      state.usuarioLogeado = usuarioLogeado
      state.token = usuarioLogeado.api_token
      state.acceso_usuario = usuarioLogeado.acceso_usuario
      state.first = usuarioLogeado.first_login

      if(state.first == '0'){
        state.status = 'success'
      }else{
        state.status = 'firstTimeLogin'
      }      
    },

    authError(state){
      state.token = ''
      state.status = 'error'
    },

    personData(state, persona){
      state.personaData = persona
      state.sexo = persona.sexo
    },

    employerData(state, empleado){
      state.empleadoData = empleado
      state.id_persona = empleado.id_persona
    },    

    departmentData(state, departamento){

    },

    salaryData(state, salario){

    },

    directionData(state, direccion){

    },

    personFamilyData(state, personFamiliar){

    },

    personReferenceData(state, personaReferencia){

    },

    familiarData(state, referFamiliar){

    },

    referenceData(state, reference){

    }
  }
})

export default store