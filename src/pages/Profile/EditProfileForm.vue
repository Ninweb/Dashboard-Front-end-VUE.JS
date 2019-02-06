<template>
  <card>
    <h5 slot="header" class="title">Editar Perfil</h5>
    <div class="row">
      <div class="col-md-5 pr-md-1">
        <base-input label="Company (disabled)"
                  placeholder="Company"
                  v-model="model.company"
                  disabled>
        </base-input>
      </div>
      
      <div class="col-md-7 pl-md-1">
        <base-input label="Correo"
                  type="email"
                  placeholder="empleado@ninweb.com">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <base-input label="Nombres"
                  v-model="model.firstName"
                  placeholder="First Name">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1">
        <base-input label="Apellidos"
                  v-model="model.lastName"
                  placeholder="Last Name">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <base-input label="Direccion"
                  v-model="model.address"
                  placeholder="Home Address">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input label="Ciudad"
                  v-model="model.city"
                  placeholder="City">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1">
        <base-input label="País"
                  v-model="model.country"
                  placeholder="Country">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Municipio"
                  placeholder="">
        </base-input>
      </div>
    </div>
    <!--<div class="row">
      <div class="col-md-8">
        <base-input>
          <label>About Me</label>
          <textarea rows="4" cols="80"
                    class="form-control"
                    placeholder="Here can be your description"
                    v-model="model.about">

              </textarea>
        </base-input>
      </div>
    </div>
    -->
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <button type="button" class="btn btn-outline-primary">Familiares</button>
        <button type="button" class="btn btn-outline-primary">Referencias</button>
        <button type="button" class="btn btn-outline-primary">Empleado</button> 
      </div> 
    </div>
    <base-button slot="footer"  class="prueba" fill>Guardar</base-button>
  </card>
</template>
<script>
  export default {
    props: {
      model: {
        type: Object,
        default: () => {
          return {};
        }
      }
    }
  }
</script>
<style>
  .prueba{
    background: linear-gradient(to bottom, #2c2d41, #282230, #201820, #150e12, #000000)!important;
  }
  .prueba:hover{
    /*background: linear-gradient(to right bottom, #181871, #27257d, #35338a, #414096, #4e4ea3)!important;*/
    background: red;
  }
</style>
