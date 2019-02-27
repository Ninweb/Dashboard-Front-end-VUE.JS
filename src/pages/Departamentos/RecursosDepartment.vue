<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <card type="user cartaDepartamento">
          <p class="card-text">
          </p>
          <div class="author">
            <div class="block block-one colorRH"></div>
            <div class="block block-two colorRH"></div>
            <div class="block block-three colorRH"></div>
            <div class="block block-four colorRH"></div>
            <div class="encima">
              <i class="fas fa-chalkboard-teacher"></i>
              <h4 class="title">Recursos Humanos</h4>
            </div>
          </div>
          <p></p>
        </card>
      </div>

      <div class="col-md-6">
        <list-employ-departments/>
      </div>
    </div>
  </div>
</template>

<script>
import ListEmployDepartments from './components/ListEmployDepartments.vue'
export default {
  components: {ListEmployDepartments}
}
</script>