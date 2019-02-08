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
                <div class="col-md-2">
                    <a href="#">
                        <img class="avatar " src="img/gabriel.jpg" alt="...">
                        <h4 class="title">Editar foto</h4>
                    </a>
                </div>
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-5">
                            <p><strong>Nombres</strong></p>
                            <H3>Pepito Gerardo</H3>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Apellidos</strong></p>
                            <H3>Perez Guillen</H3>
                        </div>
                        <div class="col-md-4">
                            <p><strong>Cédula</strong></p>
                            <H3>27006086</H3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <p><strong>Correo</strong></p>
                            <H3>prueba@ninweb.net</H3>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Password</strong></p>
                            <H3>*********</H3>
                        </div>
                        <div class="col-md-4">
                            <p><strong>Fecha de Nacimiento</strong></p>
                            <H3>19-10-1998</H3>
                        </div>
                    </div>
                </div>
                <hr style="border: 0.3px solid #ccc; width:100%;">
                <div class="col-md-12">
                        <div class="row">
                        <div class="col-md-3">
                            <p><strong>Profesión</strong></p>
                            <H3>Estudiante</H3>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Sexo</strong></p>
                            <H3>Masculino</H3>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Ciudad</strong></p>
                            <H3>Caracas</H3>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Municipio</strong></p>
                            <H3>Libertador</H3>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                        <div class="row">
                        <div class="col-md-3">
                            <p><strong>Alcaldía</strong></p>
                            <H3>Gran Caracas</H3>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Parroquía</strong></p>
                            <H3>Caricuao</H3>
                        </div>
                        <div class="col-md-6">
                            <p><strong>Zona</strong></p>
                            <H3>UD-4 , Mucuritas , Bloque 15 , Piso 03</H3>
                        </div>
                    </div>
                </div>
                <hr style="border: 0.5px solid #ccc; width:100%;">
                <div class="col-md-12">
                        <div class="row">
                        <div class="col-md-3">
                            <p><strong>Departamento</strong></p>
                            <H3>Programación</H3>
                        </div>
                        <div class="col-md-3">
                            <p><strong>Cargo</strong></p>
                            <H3>Programador</H3>
                        </div>
                        <div class="col-md-2">
                            <p><strong>Status</strong></p>
                            <H3>Activo</H3>
                        </div>
                        <div class="col-md-4">
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
