<template>
  <div>
    <card type="user">
      <div class="author">
        <div class="block block-one prueba2"></div>
        <div class="block block-two prueba2"></div>
        <div class="block block-three prueba2"></div>
        <div class="block block-four prueba2"></div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h2>Datos familiares</h2>
          </div>
        </div>
        <!-- V-FOR CON LA CANTIDAD DE FAMILIARES -->
        <div class="row">
          <div class="col-md-4">
            <p><strong>Parentezco</strong></p>
            <h5>Padre</h5>
          </div>
          <div class="col-md-4">
            <p><strong>Nombre</strong></p>
            <h5>Arnaldo</h5>
          </div>
          <div class="col-md-4">
            <p><strong>Apellido</strong></p>
            <h5>Ortega</h5>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <p><strong>Sexo</strong></p>
            <h5>Masculino</h5>
          </div>
          <div class="col-md-4">
            <p><strong>Telefono</strong></p>
            <h5>04129998328</h5>
          </div>
          <div class="col-md-4">
            <p><strong>Ocupación</strong></p>
            <h5>Tecnico Electronico</h5>
          </div>
        </div>

        <div class="row">
          <hr style="border: 1px solid #ccc; width:100%;">
        </div>

        <div class="row">
          <div class="col-md-4">
            <p><strong>Parentezco</strong></p>
            <h5>Padre</h5>
          </div>
          <div class="col-md-4">
            <p><strong>Nombre</strong></p>
            <h5>Arnaldo</h5>
          </div>
          <div class="col-md-4">
            <p><strong>Apellido</strong></p>
            <h5>Ortega</h5>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <p><strong>Sexo</strong></p>
            <h5>Masculino</h5>
          </div>
          <div class="col-md-4">
            <p><strong>Telefono</strong></p>
            <h5>04129998328</h5>
          </div>
          <div class="col-md-4">
            <p><strong>Ocupación</strong></p>
            <h5>Tecnico Electronico</h5>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5 offset-md-4">
            <button type="button" class=" btnEditar p-3"><i class="far fa-edit iconBtn"></i>Editar</button>
          </div>
        </div>
          
      </div>        
    </card>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
