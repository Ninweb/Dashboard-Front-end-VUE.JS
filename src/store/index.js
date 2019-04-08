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
    id_usuario: '',

    personaData: '',
    // sexo: '',

    departmentData: '',

    salarioData: '',

    webDepEmployers: [],
    designDepEmployers: [],
    communityDepEmployers: [],
    resourcesDepEmployers: [],
  },

  actions: {
    // login
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
    
    // obtencion de datos
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
            console.log('id-ersona', this.state.id_usuario)

            resolve(response)
            
          })
          .catch(error => {
            reject(response)
            console.log(error)
          });
      })
    },

    getPersona({ commit }){
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8000/api/personas/'+this.state.id_usuario)
          .then((response) => {
            console.log('persona', response.data)
            // var idPersona = JSON.stringify(this.$store.state.id_usuario)
            // console.log('idid', idPersona)
            let persona = response.data[this.state.id_usuario-1];
            // console.log('persona', this.persona);

            commit('personData', persona)
            console.log('personaData-sexo', this.state.personaData.sexo)
            this.cargando = false
            resolve(response)
          })
          .catch(err => {
            console.log(err)
            reject(response)
          });
      })
    },

    getDepartamento({ commit }){
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8000/api/departamentos/'+this.state.id_usuario)
        .then((response) => {
          let departamento = response.data[this.state.id_usuario-1]

          console.log('departamento-response', departamento)
          
          commit('departmentData', departamento)

          console.log('departamento', this.state.departmentData)

          resolve(response)
        })
        .catch(error => {
          reject(response)
          console.log(error)
        });
      })
    },  
    
    getDepartamentos({ commit }){
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8000/api/departamentos')
        .then((response) => {
          let departamentos = response
          let departamentosLength = response.data.length

          console.log('departamentosLength', departamentosLength)
          console.log('departamentos-response', response)

          for(var i=0; i<=departamentosLength; i++){
            var nombreDep = departamentos.data[i].nombre_departamento

            if(nombreDep == 'Desarrollo Web'){
              var webDepEmployerId = departamento.data[i].id
              commit('',webDepEmployerId)
            }else if(nombreDep == 'Diseño Gráfico'){
              var designDepEmployerId = departamento.data[i].id
              commit('',designDepEmployerId)
            }else if(nombreDep == 'Community Manager'){
              var communityDepEmployerId = departamento.data[i].id
              commit('',communityDepEmployerId)
            }else if(nombreDep == 'Recursos Humanos'){
              var resourcesDepEmployerId = departamento.data[i].id
              commit('',resourcesDepEmployerId)
            }
          }

          resolve(response)
        })
        .catch(error => {
          reject(response)
          console.log(error)
        });
      })
    },
    
    getSalary({ commit }){
      // console.log('userlogeado-employer1', this.state.usuarioLogeado)      
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8000/api/salarios/'+this.state.id_usuario)
          .then((response) => {
            console.log('response-salario', response)
            console.log('userlogeado-employer2', this.state.usuarioLogeado)
            let salario = response.data[this.state.id_usuario-1];
            
            commit('salaryData', salario)

            console.log('salario', this.state.salarioData)
            console.log('id-ersona', this.state.id_usuario)

            resolve(response)
          })
          .catch(error => {
            reject(response)
            console.log(error)
          });
      })
    },


    // envio de datos
    updatePersonaEmpleadoData(context, payload){},

    updateEmpleadoData(context, payload){},

    createDireccionData(context, payload){},

    createPersonaReferFamiliar(context, payload){},

    createReferFamiliar(context, payload){},

    createPersonaReferPersonal(context, payload){},

    createReferPersonal(context, payload){},

    // logout
    logout(context){
      return new Promise((resolve, reject) => {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']

        resolve()
      })
    }
  },  

  getters:{ // = computed properties
    access(state){
      return state.usuarioLogeado
    }
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
    
    employerData(state, empleado){
      state.empleadoData = empleado
      state.id_usuario = empleado.id_persona
    },    
    
    personData(state, persona){
      state.personaData = persona
      // state.sexo = persona.sexo
    },
    
    departmentData(state, departamento){
      state.departmentData = departamento
    },

    webDepEmployersData(state,webDepEmployerId){
      state.webDepEmployers = state.webDepEmployers.push(webDepEmployerId)
    },

    designDepEmployersData(state,designDepEmployerId){
      state.designDepEmployers = state.designDepEmployers.push(designDepEmployerId)
    },

    communityDepEmployersData(state,communityDepEmployerId){
      state.communityDepEmployers = state.communityDepEmployers.push(communityDepEmployerId)
    },

    resourcesDepEmployersData(state,resourcesDepEmployerId){
      state.resourcesDepEmployers = state.resourcesDepEmployers.push(resourcesDepEmployerId)
    },


    salaryData(state, salario){
      state.salarioData = salario
    },

    directionData(state, direccion){

    },

    personFamilyData(state, personaFamiliar){

    },

    personReferenceData(state, personaReferencia){

    },

    familiarData(state, referFamiliar){

    },

    referenceData(state, reference){

    }
  },

  
})

export default store