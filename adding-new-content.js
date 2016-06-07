//shorthand for $(document).ready();
//anonymous function called
$(function() {
  //paragraph inserted before the ul with text 'Just updated' and class of 'notice'
  $('ul').before('<p class="notice">Just updated</p>');
  //after opening tag of all list items with class 'hot', a "+ " is inserted
  $('li.hot').prepend('+ ');
  //var $newListItem set equal to a new list item
  var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
  //this new list item is inserted after the closing bracket of the last list item
  $('li:last').after($newListItem);
});
