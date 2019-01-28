<template lang="pug">
  #fullList
    .container
      search-component

      table
        thead
          tr
            th Nombre
            th Apellido
            th Email
            th Departamento
            th Status
        tbody
          tr
            td Ninweb
            td Lab
            td lab@ninweb.net
            td Testing
            td
              i.fas.fa-circle

          tr
            td Ninweb
            td Lab
            td lab@ninweb.net
            td Testing
            td
              i.fas.fa-circle

          tr
            td Ninweb
            td Lab
            td lab@ninweb.net
            td Testing
            td
              i.fas.fa-circle
</template>

<script>
  import SearchComponent from './Search.vue'

  export default {
    name: 'full-list',

    components: {SearchComponent}
  }
</script>

<style lang="scss">
  @import "../../utils/variables.scss";

  #fullList {
    p {margin:0}

    table {
      width: 100%;
      text-align: center;
      box-shadow: $shadow-box-shortElement;

      thead, tbody {
        border: $table-border;
      }

      tr {
        th, td {
          padding: 10px 15px;
        }

        td {
          border-left: $table-border;
          border-right: $table-border;
        }

        th {
          background: $grey;
          font-size: 20px;
        }

        &:nth-child(even){
          background: $nin-ligthGrey;
        }

        i {
          font-size: 10px;
          color: $active;
        }
      }
    }

  }
</style>
