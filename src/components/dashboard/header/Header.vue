<template lang="pug">
  div#head
    div.row.align-items-center
      div.col-md-4#menu-btn
        i.fas.fa-bars
        sidebar

      div.col-md-4#logo
        img(src="../../../assets/logo-ninweb.png")

      div.col-md-4#box
        p hola admin
</template>

<script>
import Sidebar from './components/Sidebar.vue'
// import $ from 'jquery'

export default {
  components: {Sidebar}
}
</script>


<style lang="scss">
  #head {
		background: #222222;
		color: white;
		width: 100%;
    margin-bottom: 50px;

    .fa-bars {
      font-size: 40px;
      cursor: pointer;
    }

    .row {
      padding: 0 20px;
      width: 100%;
      margin:0;
    }

    #logo {
      text-align: center;

      img {width: 40%}
    }
	}

</style>
