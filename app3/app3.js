//visually show difference between .html() and .text() when SETTING content
$(document).ready(function(){
  $('.projects').html(function(){
    return '<em>' + '.html() processes markup perfectly.' + '</em>';
  });
  $('.contact').text(function(){
    return '<em>' + '.text() returns markup as text.' + '</em>';
  });
});
