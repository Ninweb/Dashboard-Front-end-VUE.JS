<template lang="pug">
  .search
    .icon-search
      i.fas.fa-search
    #field
      input(type="text", placeholder="Buscar")
</template>

<script>
  export default {
    name: 'search'
  }
</script>

<style lang="scss">
  @import "../../utils/variables.scss";

  .search {
    display: flex;
    border: $table-border;
    width: 40%;
    border-radius: 40px;
    margin: 40px auto;

    .icon-search {
      background: $grey;
      padding: $search-padding;
      border-radius: 40px 0 0 40px;
    }

    #field {
      padding: $search-padding;
      width: 100%;

      input {
        border: none;
        width: 100%;
        outline: none;
      }
    }

  }
</style>
