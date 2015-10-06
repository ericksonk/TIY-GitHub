// jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
//   console.log(arguments);
// });

// source : https://api.jquery.com/jQuery.getJSON/
$.getJSON("../apis/github/users/ericksonk.json", function (data) {
  // source: http://www.tutorialspoint.com/jquery/ajax-jquery-getjson.htm
  $('.fullName').html('<h1>' + data.name); // get the html contents of the 1st matched element
  $('.userName').html('<p>' + data.login);
  $('.company').html('<li>' + data.company);
  $('.location').html('<li>' + data.location);
  $('.email').html('<a>' + data.email);
  $('.url').html('<a>' + data.blog);
  $('.created').html('<li>' + data.created_at);

//Trying to make below function work but moving forward for now...
  // $.each(data, function(key, val) {
  //   $('.' + key).text(val.value);
  // });
});

// var items = [];
// $.each( data, function(key, val) {
//   items.push("<li class") //push into array
// });
// $(.smallColumn).html(); // get the html contents of the 1st matched element
// $(.smallColumn).append(); // insert content to the end of each matched element

// http://www.jacklmoore.com/notes/jquery-tabs/
// $('ul.tabs').on('click', function(){ // selects each element inside the ul tag
//   var $active = $(this).find('a'); // `this` refers to containig element (ul.tabs); finds all `a` elements
//   $active.addClass('active');
// });

$('ul.tabs li a').on('click', function(e) {
  $('a').removeClass('active');
  $(this).addClass('active');

    var viewTab = $(this).attr('href');
      $('#tab1').hide();
      $('#tab3').hide();
      $('viewTab').show();
        e.preventDefault();
});

// if ($('#tab2' && 'active')) {
//   $('section#tab2').show();
//   $('section#tab3').hide();
//   $('section#tab1').hide();
// }
//
// if ($('#tab1' && 'active')) {
//   $('section#tab1').show();
//   $('section#tab2').hide();
//   $('section#tab3').hide();
// }
//
// if ($('#tab3' && 'active')) {
//   $('section#tab3').show();
//   $('section#tab2').hide();
//   $('section#tab1').hide();
// }
