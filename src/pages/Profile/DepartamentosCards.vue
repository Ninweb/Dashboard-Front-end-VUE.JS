<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <router-link :to="{ name: 'web' }">
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
        </router-link>
      </div>
      <div class="col-md-6">
        <router-link :to="{ name: 'design' }">
          <card type="user cartaDepartamento">
            <p class="card-text">
            </p>
            <div class="author">
              <div class="block block-one colorDiseño"></div>
              <div class="block block-two colorDiseño"></div>
              <div class="block block-three colorDiseño"></div>
              <div class="block block-four colorDiseño"></div>
              <div class="encima">
                <i class="fas fa-draw-polygon"></i>
                <h4 class="title">Diseño Grafico</h4>
              </div>
            </div>
            <p></p>
          </card>
        </router-link>
      </div>
    </div>


    <div class="row">
      <div class="col-md-6">
        <router-link :to="{ name: 'community' }">
          <card type="user cartaDepartamento">
            <p class="card-text">
            </p>
            <div class="author">
              <div class="block block-one colorMarketing"></div>
              <div class="block block-two colorMarketing"></div>
              <div class="block block-three colorMarketing"></div>
              <div class="block block-four colorMarketing"></div>
              <div class="encima">
                <i class="fas fa-bullseye"></i>
                <h4 class="title">Community Manager</h4>
              </div>
            </div>
            <p></p>
          </card>
        </router-link>
      </div>
      <div class="col-md-6">
        <router-link :to="{ name: 'recursos' }">
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
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .cartaDepartamento{
        height: 152px!important;
    }
    .colorDiseño{
        background-image: linear-gradient(to bottom, 
        rgba(253, 131, 0, 0.3), 
        rgba(255, 157, 0, 0.3), 
        rgba(254, 186, 0, 0.3), 
        rgba(249, 212, 0, 0.3), 
        rgba(240, 240, 0, 0.3))!important;
    }
    .colorMarketing{
        background-image: linear-gradient(to bottom, 
        rgba(253, 0, 131, 0.3), 
        rgba(184, 26, 97,0.3) 
        rgba(120, 28, 65, 0.3), 
        rgba(61, 21, 35, 0.3), 
        rgba(0, 0, 0, 0.3) ) !important;
    }
    .colorRH{
        background-image: linear-gradient(to bottom, 
        rgba(0, 253, 76, 0.3), 
        rgba(0, 222, 67, 0.3), 
        rgba(0, 192, 58, 0.3), 
        rgba(0, 163, 49, 0.3), 
        rgba(0, 135, 40, 0.3))!important;
    }
    .encima{
        position: relative;
    }
    i{
        color: #ffffff;
        font-size: 40px;
    }
</style>


