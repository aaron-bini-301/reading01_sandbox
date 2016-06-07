//add and remove css classes
//add and remove DOM element attributes
$(document).ready(function() {
  $('.btn').click(function(){
    $('.projects').addClass('added').text("Why am I red?");
    $('.about').removeClass('about').text("I've got no class!!!");
  });
});
