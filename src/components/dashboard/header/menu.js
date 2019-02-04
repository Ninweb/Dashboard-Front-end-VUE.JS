import $ from 'jquery'

$(document).ready(function(){
  // $('#menu').css("left","-190px")
  var show = false
  var delay = 200
  $('#app').css("padding-left","0px")
  
  $('.fa-bars').click(() => {
    if (!show) {
      $('#sidebarMenu').animate({
        left:'0'
      }, delay)
      $('#app').animate({
        paddingLeft:'190px'
      }, delay)

      show = true
    }else{
      $('#sidebarMenu').animate({
        left:'-210px'
      }, delay)
      $('#app').animate({
        paddingLeft:'0'
      }, delay)

      show = false
    }

    $('#app').css("padding-left","0px")
  })

  $('#app').css("padding-left","0px")
})