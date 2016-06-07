//add and remove DOM element attributes
$(document).ready(function() {
  $('.btn').click(function(){
    $('.projects').attr('id', 'added').text("My id says I'm red now.");
    $('.about').removeAttr('id').text("I liked being red.");
  });
});
