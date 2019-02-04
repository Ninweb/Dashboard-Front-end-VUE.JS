<template lang="pug">
  #shortProfile
    .container#record
      .row
        #col1.col-md-6
          img(src='../../assets/default-profile-pic.png')
          #primaryData
            p
              b Nombre: 
              |  
            p
              b Apellido:
            p
              b Cargo:

        #col2.col-md-6
          #secondaryData
            p
              b Status:
            p
              b Departamento:
</template>

<script>
  export default {
    name: 'short-profile',
    data (){
      return{
        id_persona: localStorage.getItem('id_persona'),
        usuarioLogeado: JSON.parse(localStorage.getItem('usuarioLogeado')),
        persona: ''
      }
       
    },
    created() { //
        //la funcion de abajo depende de la dependencia vue-resource
        // .then es una promesa de js
      /*this.$http.get('http://localhost:8000/api/personas/'+this.id_persona,this.usuarioLogeado)
          .then(response => { 
            console.log(response);
            /*this.persona = response.body[0];
            localStorage.setItem('persona',this.persona);
            console.log(this.persona);
          })
          .catch(error => {
              console.log(error)
          });*/
    }
  }
</script>

<style lang="scss">
  @import "../../utils/variables.scss";

  #shortProfile {
    height: inherit;
    margin: 5% auto;

    #record {
      // border-radius: 20px;
      background: $nin-white;
      box-shadow: $shadow-box-shortElement;
      padding: 10px;
      // margin: 0;

      #col1 {
        // border-right: 2px solid $nin-black;
        text-align:center;

        img {
          width: 70%;
        }

        #primaryData {
          margin-top: 30px;
          text-align: justify;
        }
      }
    }
  }
</style>
