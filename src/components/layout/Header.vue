<template lang="pug">
  div#head
    div.row.align-items-center
      div.col-md-4#menu-btn
        i.fas.fa-times
        i.fas.fa-bars

      div.col-md-4#logo
        img(src="../../assets/logo-ninweb.png")

      div.col-md-4#box
        p hola
</template>

<style lang="scss">
  #head {
		background: #222222;
		color: white;
		width: 100%;

    .row {
      padding: 0 20px;
      width: 100%;
      margin:0;
    }

    #logo {
      text-align: center;
    }
	}

</style>
