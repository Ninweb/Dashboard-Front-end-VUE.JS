<template>

  <div>
    <div class="row fuentes">
      <div class="col-md-12 align-center">
        <div>
          <router-link :to="{path: '/dashboard/empleados/crear'}">
            <button type="button" class="btn btn-outline-primary">Crear empleado</button>
          </router-link>
        </div>
      </div>
    </div>

    <table class="table tablesorter">
      <!-- <thead :class="theadClasses"> -->
      <tr class="tableHeader">
        <!-- <slot name="columns"> -->
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo electrónico</th>
          <th>Departamento</th>
          <th>Status</th>
          <th>Acciones</th>
        <!-- </slot> -->
      </tr>
      <!-- </thead> -->
      <!-- <tbody :class="tbodyClasses"> -->
      <tr>
        <td>Carlos</td>
        <td>Rodriguez</td>
        <td>c@c.com</td>
        <td>Web</td>
        <td>Activo</td>
        <td>
          <div id="actions">
            <button type="button" class="btnAction"><i class="far fa-edit iconBtn"></i></button>
            <button type="button" class="btnAction"><i class="fas fa-user-minus iconBtn"></i></button>
          </div>
        </td>
      </tr>
      <tr>
        <td>Carlos</td>
        <td>Rodriguez</td>
        <td>c@c.com</td>
        <td>Web</td>
        <td>Activo</td>
        <td>
          <div id="actions">
            <button type="button" class="btnAction"><i class="far fa-edit iconBtn"></i></button>
            <button type="button" class="btnAction"><i class="fas fa-user-minus iconBtn"></i></button>
          </div>
        </td>
      </tr>
      <tr>
        <td>Carlos</td>
        <td>Rodriguez</td>
        <td>c@c.com</td>
        <td>Web</td>
        <td>Activo</td>
        <td>
          <div id="actions">
            <button type="button" class="btnAction"><i class="far fa-edit iconBtn"></i></button>
            <button type="button" class="btnAction"><i class="fas fa-user-minus iconBtn"></i></button>
          </div>
        </td>
      </tr>
      <tr>
        <td>Carlos</td>
        <td>Rodriguez</td>
        <td>c@c.com</td>
        <td>Web</td>
        <td>Activo</td>
        <td>
          <div id="actions">
            <button type="button" class="btnAction"><i class="far fa-edit iconBtn"></i></button>
            <button type="button" class="btnAction"><i class="fas fa-user-minus iconBtn"></i></button>
          </div>
        </td>
      </tr>
      <!-- </tbody> -->
    </table>

    <hr>
  </div>

</template>
<script>
</script>
<style>
  table {
    text-align: center;
  }

  .tableHeader {
    color: white;
  }

  hr {
    background: white !important;
  }

  .btnAction {
    text-align: center !important;
    border: none !important;
    background: none !important;
    padding: 0 10px !important;
  }
</style>
