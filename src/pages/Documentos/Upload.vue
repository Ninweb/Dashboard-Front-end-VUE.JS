<template>
  <div>
    <div class="row">
      <div class="col-md-12 align-center">
        <div>
          <router-link to="/documentos">
            <button type="button" class="btn btn-outline-primary">Regresar</button>
          </router-link>
        </div>
      </div>

      <div>        
        <p id="info">Por favor verifíque la información que ingresará antes de completar el formulario. Utilíze la ficha resumen, al lado derecho de la pantalla, como ayuda para verificar la información.</p>
      </div>

      <div class="col-md-12 nuevoEmpleado">
        <form-wizard 
          shape="circle" 
          color="#1B3F65" 
          next-button-text="Siguiente"
          back-button-text="Anterior"
          finish-button-text="Cargar documento"
          @on-complete="uploadDocument">

          <tab-content icon="fas fa-user icon-tab">
            <p id="subtitle-form">Carga de documento</p>
            <label>Nombre del documento</label> <br>
            <base-input type="text" v-model="document.nombre"></base-input> <br>
            <label>Documento</label> <br>
            <input type="file" @change="verifyDocument"><br>
          </tab-content>
        </form-wizard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      document: {
        nombre: '',
        doc: ''
      }
    }
  },

  methods: {
    verifyDocument (e) {
      console.log(e.target.files[0])
      var fileReader = new FileReader()

      fileReader.readAsDataURL(e.target.files[0])

      fileReader.onload = (e) => {
        this.document.doc = e.target.result
      }

      console.log(this.document)
    },

    uploadDocument() {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/documentos', this.document).then(response => {
          console.log('success8 ', response)
          resolve(true)
        }).catch(error => {
          console.log('error8 ', response)
          reject(false)
        })
      })
    },
  }
}
</script>

<style>
.nuevoDocumento {
  margin: 0 auto;
  width: 90%;
}
</style>