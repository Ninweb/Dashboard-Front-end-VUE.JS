<template lang="pug">
  #carouselEmployees
    .row
      .col-md-3.subboss
          img(src='../../assets/default-profile-pic.png')
          #data
            p Nombre
            p Gerente del Departamento

      .col-md-3.subboss
          img(src='../../assets/default-profile-pic.png')
          #data
            p Nombre
            p Gerente del Departamento

      .col-md-3.subboss
          img(src='../../assets/default-profile-pic.png')
          #data
            p Nombre
            p Gerente del Departamento

      .col-md-3.subboss
          img(src='../../assets/default-profile-pic.png')
          #data
            p Nombre
            p Gerente del Departamento

    //- .container
    //-   .row
    //-     b-carousel(
    //-       indicators,
    //-       :interval="3000",
    //-       img-width="1024",
    //-       img-height="480",
    //-       @sliding-start="onSlideStart",
    //-       @sliding-end="onSlideEnd"
    //-     )
    //-       b-carousel-slide(img-blank).subboss
    //-         p
    //-           img(src='../../assets/default-profile-pic.png')
    //-           #data
    //-             p Nombre
    //-             p Gerente del Departamento

    //-       b-carousel-slide.subboss
    //-         p
    //-           img(src='../../assets/default-profile-pic.png')
    //-           #data
    //-             p Nombre
    //-             p Gerente del Departamento

    //-       b-carousel-slide.subboss
    //-         p
    //-           img(src='../../assets/default-profile-pic.png')
    //-           #data
    //-             p Nombre
    //-             p Gerente del Departamento

</template>

<script>
  export default {
    name: 'carousel-employees',

    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss">
  @import "../../utils/variables.scss";

  #carouselEmployees {
    margin-top: 40px;
    margin-bottom: 40px;

    .subboss {
      display: flex;
      font-size: 12px;

      p {
        margin: 0;
      }

      #data {
        padding: 15px 0 0 5px;
      }

      img {
        width: 70px;
        height: 70px;
      }
    }
  }
</style>
