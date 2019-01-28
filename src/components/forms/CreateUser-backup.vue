<template lang="pug">
  #createUserForm
    .container
      .info
        .icon
          i.fas.fa-info-circle
        .texto
          p Este es el formulario para crear un usuario. Del lado izquierdo esta el formulario dividido en partes para facilitar el llenado del mismo, y del lado derecho esta una ficha resumen. Esta ficha es una ayuda para la confirmación de todos los datos ingresados.
      .row
        .col-md-7
          form-wizard(
            @on-complete= "onComplete",
            back-button-text= "Anterior",
            next-button-text= "Siguiente",
            finish-button-text= "Enviar"
            color="#bf0a08"
          )
            tab-content(icon="fas fa-key")
              .data#content1
                p.title {{ titles.form_1 }}
                .form-group
                  label Correo empresarial
                  input(type="email", v-model="email").form-control
                .form-group
                  label Contraseña
                  input(type="password", v-model="password").form-control

            tab-content(icon="fas fa-user")
              .data#content2
                p.title {{ titles.form_2 }}
                .form-group
                  label Nombre
                  input(type="text", v-model="firstName").form-control
                .form-group
                  label Apellido
                  input(type="text", v-model="lastName").form-control
                .form-group
                  label Sexo
                  input(type="text", v-model="sex").form-control
                .form-group
                  label Fecha de nacimiento
                  input(type="date", v-model="birth").form-control
                .form-group
                  label Cédula de identidad
                  input(type="text", v-model="ci").form-control
                .form-group
                  label Profesión
                  input(type="text", v-model="profesion").form-control


            tab-content(icon="fas fa-home")
              .data#content3
                p.title {{ titles.form_3 }}
                .form-group
                  label Parroquia
                  input(type="text", v-model="parroquia").form-control
                .form-group
                  label Municipio
                  input(type="text", v-model="municipio").form-control
                .form-group
                  label Alcaldía
                  input(type="text", v-model="alcaldia").form-control
                .form-group
                  label Ciudad
                  input(type="text", v-model="ciudad").form-control
                .form-group
                  label Zona
                  input(type="text", v-model="zona").form-control

            tab-content(icon="fas fa-users")
              .data#content4
                p.title {{ titles.form_4 }}
                .form-group
                  label Nombre
                  input(type="text", v-model="ref_firstName").form-control
                .form-group
                  label Apellido
                  input(type="text", v-model="ref_lastName").form-control
                .form-group
                  label Sexo
                  input(type="text", v-model="ref_sex").form-control
                .form-group
                  label Fecha de nacimiento
                  input(type="date", v-model="ref_birth").form-control
                .form-group
                  label Cédula de identidad
                  input(type="text", v-model="ref_ci").form-control
                .form-group
                  label Profesión
                  input(type="text", v-model="ref_profesion").form-control
                .form-group
                  label Tiempo conocido
                  input(type="text", v-model="ref_tiempo_conocido").form-control
                .form-group
                  label Teléfono
                  input(type="text", v-model="ref_phone").form-control

            tab-content(icon="fas fa-users")
              .data#content5
                p.title {{ titles.form_5 }}
                .form-group
                  label Nombre
                  input(type="text", v-model="fam_firstName").form-control
                .form-group
                  label Apellido
                  input(type="text", v-model="fam_lastName").form-control
                .form-group
                  label Sexo
                  input(type="text", v-model="fam_sex").form-control
                .form-group
                  label Fecha de nacimiento
                  input(type="date", v-model="fam_birth").form-control
                .form-group
                  label Cédula de identidad
                  input(type="text", v-model="fam_ci").form-control
                .form-group
                  label Profesión
                  input(type="text", v-model="fam_profesion").form-control
                .form-group
                  label Parentezco
                  input(type="text", v-model="fam_parentezco").form-control
                .form-group
                  label Teléfono
                  input(type="text", v-model="fam_phone").form-control

            tab-content(icon="fas fa-building")
              .data#content6
                p.title {{ titles.form_6 }}
                .form-group
                  label Departamento
                  input(type="text", v-model="department").form-control
                  //- select.custom-select
                  //-   option(selected, v-model="department") Gerencia General
                  //-   option(value="1", v-model="department") Diseño Gráfico
                  //-   option(value="2", v-model="department") Marketing & Social Media
                  //-   option(value="3", v-model="department") Desarrollo Web

            tab-content(icon="fas fa-briefcase")
              .data#content7
                p.title {{ titles.form_7 }}
                .form-group
                  label Descripción del cargo
                  input(type="text", v-model="cargo").form-control
                .form-group
                  label Fecha de ingreso
                  input(type="date", v-model="fecha_ingreso").form-control
                .form-group
                  label Fecha de egreso
                  input(type="date", v-model="fecha_egreso").form-control
                .form-group
                  label Status
                  input(type="", v-model="status").form-control
                .form-group
                  label Recorrido de tu hogar a la oficina
                  textarea(row="4", v-model="home_office").form-control
                .form-group
                  label Recorrido de la oficina a tu hogar
                  textarea(row="4", v-model="office_home").form-control
                .form-group
                  label Número de habitación
                  input(type="text", v-model="number_home").form-control
                .form-group
                  label Número de teléfono
                  input(type="text", v-model="number_phone").form-control
                .form-group
                  label Tipo de sangre
                  input(type="text", v-model="blood_type").form-control
                .form-group
                  label Estado civil
                  input(type="text", v-model="estado_civil").form-control
                .form-group
                  label Educación
                  input(type="text", v-model="education").form-control

            tab-content(icon="fas fa-money-bill-wave")
              .data#content8
                p.title {{ titles.form_8 }}
                .form-group
                  label Fecha de inicio
                  input(type="date", v-model="fecha_inicio").form-control
                .form-group
                  label Fecha de cierre
                  input(type="date", v-model="fecha_fin").form-control
                .form-group
                  label Sueldo base
                  input(type="text", v-model="sueldo_base").form-control
                .form-group
                  label Cesta ticket
                  input(type="text", v-model="sueldo_ticket").form-control
                .form-group
                  label Sueldo final
                  input(type="text", v-model="sueldo_final").form-control

            tab-content(icon="fas fa-circle")
              .data#content9
                p.info Antes de hacer click en el botón "Enviar", por favor confirme los datos en la ficha resumen. De estar algún dato errado, presione el botón "Anterior" hasta llegar al formulario donde esta el dato errado. Luego, haga click en "Siguiente" y hasta llegar nuevamente a este módulo y, si todos los datos estan correctos, haga click en "Enviar".

        .col-md-5
          #liveForm
            .title
              p Ficha resumen del usuario

            .data
              p.subtitle {{ titles.form_1 }}
              p Correo: {{ email }}

              p.subtitle {{ titles.form_2 }}
              p Nombre: {{ firstName }}
              p Apellido: {{ lastName }}
              p Sexo: {{ sex }}
              p Fecha de nacimiento: {{ birth }}
              p Cédula de identidad: {{ ci }}
              p Profesión: {{ profesion }}

              p.subtitle {{ titles.form_3 }}
              p Parroquia: {{ parroquia }}
              p Municipio: {{ municipio }}
              p Alcaldía: {{ alcaldia }}
              p Ciudad: {{ ciudad }}
              p Zona: {{ zona }}

              p.subtitle {{ titles.form_4 }}
              p Nombre: {{ ref_firstName }}
              p Apellido: {{ ref_lastName }}
              p Sexo: {{ ref_sex }}
              p Fecha de nacimiento: {{ ref_birth }}
              p Cédula de identidad: {{ ref_ci }}
              p Profesión: {{ ref_profesion }}
              p Tiempo conocido: {{ ref_tiempo_conocido }}
              p Teléfono: {{ ref_phone }}

              p.subtitle {{ titles.form_5 }}
              p Nombre: {{ fam_firstName }}
              p Apellido: {{ fam_lastName }}
              p Sexo: {{ fam_sex }}
              p Fecha de nacimiento: {{ fam_birth }}
              p Cédula de identidad: {{ fam_ci }}
              p Profesión: {{ fam_profesion }}
              p Parentezco: {{ fam_parentezco }}
              p Teléfono: {{ fam_phone }}

              p.subtitle {{ titles.form_6 }}
              p Departamento: {{ department }}

              p.subtitle {{ titles.form_7 }}
              p Descripción del cargo: {{ cargo }}
              p Fecha de ingreso: {{ fecha_ingreso }}
              p Fecha de egreso: {{ fecha_egreso }}
              p Status: {{ status }}
              p Recorrido de tu hogar a la oficina: {{ home_office }}
              p Recorrido de la oficina a tu hogar: {{ office_home }}
              p Número de habitación: {{ number_home }}
              p Número de teléfono: {{ number_phone }}
              p Tipo de sangre: {{ blood_type }}
              p Estado civil: {{ estado_civil }}
              p Educación: {{ education }}

              p.subtitle {{ titles.form_8 }}
              p Fecha de inicio: {{ fecha_inicio }}
              p Fecha de cierre: {{ fecha_fin }}
              p Sueldo base: {{ sueldo_base }}
              p Cesta ticket: {{ sueldo_ticket }}
              p Sueldo final: {{ sueldo_final }}

    //- #liveForm
    //-     .title
    //-       p Ficha resumen del usuario
    //-     .row

    //-         .col-md-3
    //-           .data
    //-             p.subtitle {{ titles.form_1 }}
    //-             p Correo: {{ email }}

    //-         .col-md-3
    //-           .data
    //-             p.subtitle {{ titles.form_2 }}
    //-             p Nombre: {{ firstName }}
    //-             p Apellido: {{ lastName }}
    //-             p Sexo: {{ sex }}
    //-             p Fecha de nacimiento: {{ birth }}
    //-             p Cédula de identidad: {{ ci }}
    //-             p Profesión: {{ profesion }}

    //-         .col-md-3
    //-           .data
    //-             p.subtitle {{ titles.form_3 }}
    //-             p Parroquia: {{ parroquia }}
    //-             p Municipio: {{ municipio }}
    //-             p Alcaldía: {{ alcaldia }}
    //-             p Ciudad: {{ ciudad }}
    //-             p Zona: {{ zona }}

    //-         .col-md-3
    //-           .data
    //-             p.subtitle {{ titles.form_4 }}
    //-             p Nombre: {{ ref_firstName }}
    //-             p Apellido: {{ ref_lastName }}
    //-             p Sexo: {{ ref_sex }}
    //-             p Fecha de nacimiento: {{ ref_birth }}
    //-             p Cédula de identidad: {{ ref_ci }}
    //-             p Profesión: {{ ref_profesion }}
    //-             p Tiempo conocido: {{ ref_tiempo_conocido }}
    //-             p Teléfono: {{ ref_phone }}
    //-     .row

    //-         .col-md-3
    //-           .data
    //-             p.subtitle {{ titles.form_5 }}
    //-             p Nombre: {{ fam_firstName }}
    //-             p Apellido: {{ fam_lastName }}
    //-             p Sexo: {{ fam_sex }}
    //-             p Fecha de nacimiento: {{ fam_birth }}
    //-             p Cédula de identidad: {{ fam_ci }}
    //-             p Profesión: {{ fam_profesion }}
    //-             p Parentezco: {{ fam_parentezco }}
    //-             p Teléfono: {{ fam_phone }}

    //-         .col-md-3
    //-           .data
    //-             p.subtitle {{ titles.form_6 }}
    //-             p Departamento: {{ department }}

    //-         .col-md-3
    //-           .data
    //-             p.subtitle {{ titles.form_7 }}

    //-         .col-md-3
    //-           .data
    //-             p.subtitle {{ titles.form_8 }}
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  name: 'create-user',

  data () {
    return {
      titles: {
        form_1: 'Acceso a la empresa',
        form_2: 'Datos de la persona',
        form_3: 'Dirección',
        form_4: 'Referencias personales',
        form_5: 'Familiares',
        form_6: 'Departamento',
        form_7: 'Empleado',
        form_8: 'Salario'
      },

      email: '',
      password: '',

      firstName: '',
      lastName: '',
      sex: '',
      birth: '',
      ci: '',
      profesion: '',

      parroquia: '',
      municipio: '',
      alcaldia: '',
      ciudad: '',
      zona: '',

      ref_firstName: '',
      ref_lastName: '',
      ref_sex: '',
      ref_birth: '',
      ref_ci: '',
      ref_profesion: '',
      ref_tiempo_conocido: '',
      ref_phone: '',

      fam_firstName: '',
      fam_lastName: '',
      fam_sex: '',
      fam_birth: '',
      fam_ci: '',
      fam_profesion: '',
      fam_parentezco: '',
      fam_phone: '',

      department: '',

      cargo: '',
      fecha_ingreso: '',
      fecha_egreso: '',
      status: '',
      home_office: '',
      office_home: '',
      number_home: '',
      number_phone: '',
      blood_type: '',
      estado_civil: '',
      education: '',

      fecha_inicio: '',
      fecha_fin: '',
      sueldo_base: '',
      sueldo_ticket: '',
      sueldo_final: '',

    }
  },

  components: {
    FormWizard,
    TabContent
  },

  methods: {
    onComplete: function(){
      alert('Yay. Done!');
    }
  }
}
</script>

<style lang="scss">
  @import "../../utils/variables.scss";

  #createUserForm {

    .wizard-header {
      display: none;
    }

    .info {
      margin: 40px auto;
      display: flex;

      .icon {
        font-size: 50px;
        color: $info-color;
        width: 20%;
        text-align: center;
      }

      .texto {
        padding-top: 10px;
        font-weight: bold;
      }
    }

    .data {
      margin: 30px auto;

      .title {
        text-align: center;
        font-weight: bold;
        font-size: 18px;
      }
      .subtitle {
        font-size: 16px;
        text-align: center;
        font-weight: bold;
        margin: 5px auto;
      }
      .info {
        font-size: 16px;
        text-align: center;
        font-weight: bold;
        margin: 10px auto;
      }
    }

    #content1, #content4, #content5 {
      .form-group {
        width: 60%;
        margin: 0 auto;
      }
    }

    #content2 {
      .form-group {
        width: 60%;
        margin: 0 auto;
      }
    }

    #liveForm {
      background: $nin-white;
      box-shadow: $shadow-box-shortElement;
      padding: 10px;
      border-radius: 5px;

      p {margin-bottom:5px}

      .title {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 20px;
        margin-top: 5px;
      }
    }
  }

</style>
