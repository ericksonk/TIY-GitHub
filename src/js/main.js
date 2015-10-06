jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
  console.log(arguments);
});

// http://www.jacklmoore.com/notes/jquery-tabs/
$('ul.tabs').on('click', function(){ // selects each element inside the ul tag
  var $active = $(this).find('a'); // `this` refers to containig element (ul.tabs); finds all `a` elements
  $active.addClass('active');
});
