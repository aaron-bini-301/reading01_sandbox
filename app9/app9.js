//show when this is useful to change plain JS DOM elements
$(document).ready(function(){
  $('button').click(function(){
    $('li').html(function(){
      return '<em>' + $(this).text() + '</em>';
    });
  });
});
