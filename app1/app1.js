//include code that runs before a document has fully loaded
//include code that uses .ready() to run only after document has loaded
$('div').addClass('red');
console.log('this function does not change div texts to red because script is loaded at the beginning of the body.');

$(document).ready(function(){
  $('.projects').text("I'm accessible");
  console.log('but this function does change the projects texts because it waits for the document to fully load.')
});
