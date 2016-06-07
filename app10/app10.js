//change background color on every third list item
$(document).ready(function() {
  $('button').click(function(){
    $('li:nth-child(3n)').css('background-color', 'green');
  });
});
