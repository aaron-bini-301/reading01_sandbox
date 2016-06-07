//list items with id not equal to 'one' will be hidden, then after a delay of 500ms, will fade in
$('li[id!="one"]').hide().delay(500).fadeIn(1400); // semi-colon indicates end of chaining - can be writen on separate lines
//adds the css class 'next' to the first list-item on the page
$('li:first-child').addClass('next');
//adds the class 'highlight' to any list items with the class of 'priority'
$('li.priority').addClass('highlight');
