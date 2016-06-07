//use .remove(), and show how .append() and .appendTo() differ
$(document).ready(function(){
  $('button').click(function(){
    $('.projects').remove();
    $('.contact').append("<li>I'm not giving you my phone number!");
    $('.about').appendTo(".contact").text("What am I doing over here?");
  });
});
