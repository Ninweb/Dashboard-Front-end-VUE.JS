<template>

  <div>
    <div class="row fuentes">
      <div class="col-md-12 align-center">
        <div>
          <router-link :to="{path: '/dashboard/documentos/upload'}">
            <button type="button" class="btn btn-outline-primary">Cargar documento</button>
          </router-link>
        </div>
      </div>
    </div>

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
