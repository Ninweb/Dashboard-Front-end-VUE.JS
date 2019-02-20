<template>
  <!-- <card> -->
    <div class="row">
      <div class="col-md-6">
        <card type="user cartaDepartamento">
          <p class="card-text">
          </p>
          <div class="author">
            <div class="block block-one prueba2"></div>
            <div class="block block-two prueba2"></div>
            <div class="block block-three prueba2"></div>
            <div class="block block-four prueba2"></div>
            <div class="encima">
              <i class="fas fa-laptop-code"></i>
              <h4 class="title">Desarrollo web</h4>
            </div>
          </div>
          <p></p>
        </card>
      </div>

      <div class="col-md-6">
        <list-employ-departments/>
      </div>
    </div>
  <!-- </card> -->
</template>

<script>
import ListEmployDepartments from './components/ListEmployDepartments.vue'
export default {
  components: {ListEmployDepartments}
}
</script>
