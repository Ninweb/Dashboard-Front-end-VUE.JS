<template>

  <div>
    <table class="table tablesorter" :class="tableClass">
      <thead :class="theadClasses">
        <tr>
          <slot name="columns">
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo electrónico</th>
            <th>Status</th>
            <th>Acciones</th>
          </slot>
        </tr>
      </thead>
      <tbody :class="tbodyClasses">
        <tr>
          <td>Carlos</td>
          <td>Rodriguez</td>
          <td>c@c.com</td>
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
          <td>Activo</td>
          <td>
            <div id="actions">
              <button type="button" class="btnAction"><i class="far fa-edit iconBtn"></i></button>
              <button type="button" class="btnAction"><i class="fas fa-user-minus iconBtn"></i></button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <hr>
  </div>

</template>

<style scoped>
  table {
    text-align: center;
    overflow:scroll;
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
