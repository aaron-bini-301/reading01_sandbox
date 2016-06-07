//get and set a dom element's css properties
$(document).ready(function(){
  $('button').click(function() {
    $(".projects").css({
      'background-color': 'red',
      'width': '25px'
    }).text("I don't like these changes!!!");
  });
});
