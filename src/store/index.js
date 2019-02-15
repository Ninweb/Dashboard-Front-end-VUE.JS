import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{ //= data
       empleado : 'hola' 
    },

    getters:{ // = compuedd properties
        //..
    },

    actions: {

    },

    mutations:{
        // toda funcion debe tener nombreFuncion(state , parametros ...)
        getEmpleado(state, id){

        }
    }
})