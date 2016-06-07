//include code that runs before a document has fully loaded
//include code that uses .ready() to run only after document has loaded
$('.projects').each(function(){
  console.log("Can I access the project elements on the page?" + $(this).text);
});

$(document).ready(function(){
  
});
