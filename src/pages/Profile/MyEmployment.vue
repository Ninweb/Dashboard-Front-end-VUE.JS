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
                        <div class="row">
                        <div class="col-md-3">
                            <p><strong>Fecha de ingreso</strong></p>
                            <h4>07-12-2018</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Fecha de Retiro</strong></p>
                            <h4>No aplica</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Transporte de ida</strong></p>
                            <h4>Metro</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Transporte de vuelta</strong></p>
                            <h4>Camioneta</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                        <div class="row">
                        <div class="col-md-3">
                            <p><strong>Número de habitación</strong></p>
                            <h4>02124317189</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Número de celular</strong></p>
                            <h4>04122024414</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Tipo de sangre</strong></p>
                            <h4>A++</h4>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Estado Civil</strong></p>
                            <h4>Soltero</h4>
                        </div>
                    </div>
                </div>
                <hr style="border: 0.5px solid #ccc; width:100%;">
                <div class="col-md-12">
                        <div class="row">
                        
                        
                        <div class="col-md-4 offset-md-4">
                            <button type="button" class=" btnEditar p-3"><i class="far fa-edit iconBtn"></i>Editar</button>
                            <button type="button" class=" btnEditar p-3"><i class="far fa-file-pdf iconBtn"></i>Generar PDF</button>
                        </div>
                    </div>
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
    .iconBtn{
        font-size: 20px!important;
        margin-right: 15px;
    }
   .btnEditar{
       border-radius: 8px;
       color: white!important;
       background:rgba(0, 0, 0, 0.3)!important;
       border: 1px solid #344675;
       margin: 4px;
       
   }
</style>
