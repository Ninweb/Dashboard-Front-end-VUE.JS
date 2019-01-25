<template lang="pug">
  #login
    form
      div#loginTitle
        p.title NINWEB, C.A.
        p.subtitle Sistema Administrativo

      .form-group
        i.fas.fa-at
        input.form-control(type="email")

      .form-group
        i.fas.fa-key
        input.form-control(type="password")

      button.btn.btn-primary(type="submit") Ingresar
</template>

<script>
export default {
  name: 'app',

}
</script>

<style lang="scss">
@import "../utils/variables.scss";

#login {
  padding: 15% 0;
  height: 100vh;
  background: $nin-white;

  form {
    width: 30%;
    margin: 0 auto;
    padding: 20px 0;
    border: 2px solid $nin-black;
    border-radius: 20px;

    #loginTitle {
      margin-bottom: 20px;

      p {
        margin: 0;
        text-align: center;
      }

      .title {
        font-size: 22px;
        font-weight: bold;
      }
      .subtitle {
        font-size:20px;
      }
    }

    .form-group {
      display: flex;
      width: 70%;
      margin: 0 auto;
      padding: 10px 0;
    }

    i {
      background: $nin-redDeactivated;
      width:30%;
      text-align:center;
      font-size: 16px;
      padding-top: 10px;
      color: white;
    }

    input {
      border-radius: 0;
    }

    button {
      background: $nin-redDeactivated;
      display:flex;
      align-content: center;
      justify-content:center;
      border: none;
      margin: 10px auto;

      &:hover {
        background: $nin-redActivated;
      }
    }
  }
}
</style>
