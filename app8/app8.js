//use the this keyword inside of an each() to manipulate dom elements

$(document).ready(function(){
  $('button').click(function(){
    $('div').each(function(){
      var $newListItem = $('<li>I have been added</li>');
      $(this).after($newListItem);
    });
  });
});
