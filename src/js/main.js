;(function(){ // START IIFE
  angular.module("tiy-github", [ ])
    .run(function($http, $rootScope){
      // $rootScope.name = "Kristine Erickson";
      $http.get('/apis/github/users/ericksonk.json')
        .then(function(response){
          $rootScope.name = response.data.name;
        });
    })
  ; // END MODULE
})(); // END IIFE



// jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
//   console.log(arguments);
// });

// AJAX THINGS
// source : https://api.jquery.com/jQuery.getJSON/
// $.getJSON("../apis/github/users/ericksonk.json", function (data) {
//   // source: http://www.tutorialspoint.com/jquery/ajax-jquery-getjson.htm
//   $('.fullName').html('<h1>' + data.name); // get the html contents of the 1st matched element
//   $('.userName').html('<p>' + data.login);
//   $('.company').html('<li>' + data.company);
//   $('.location').html('<li>' + data.location);
//   $('.email').html('<a>' + data.email);
//   $('.url').html('<a>' + data.blog);
//   $('.created').html('<li>' + data.created_at);

//Trying to make below function work but moving forward for now...
  // $.each(data, function(key, val) {
  //   $('.' + key).text(val.value);
  // });
// });

// CLASS NOTES

// _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
// var text = $(select elements to get {{name}}).html();
// var tpl = _.template(text);
// tpl ({name: "Kristine Erickson"});
// var replacement = tpl ({name: "Kristine Erickson"});

// $.getJSON("../apis/github/users/ericksonk.json", function (data) {
//   var tempHTML = $('#profileData');
//   _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
//     var compiled = _.template('#tLogin {{name}}');
//     console.log(compiled);
// });
// _.templateSettings.interpolate = /{{([\s\S]+?)}}/g; // regular expression- a way of matching text
// var profileTpl = _.template($('ul.class template').html())
//   $(ul class).append(profileTpl){
//     company: "The Internet"
//     email: "octocat@github.com"
//   }

// $('ulclass').append(profileTpl(data))

// END CLASS NOTES


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
$(document).ready(function(){
  $('#tab1').hide(); // hides panel 1 on load
  $('#tab3').hide(); // hides panel 3 on load

  $('.tabs > a').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');

    var panelId = $(this).attr('href');
      $(panelId).addClass('active').siblings.removeClass('active');
  });

  // $('nav.tabs a').on('click', function(e) {
  //   $('a').removeClass('active');
  //   $(this).addClass('active');
  //
  // });
});

      // var viewTab = $(this).attr('href');
      //   $('#tab1').hide();
      //   $('#tab3').hide();
      //   viewTab.show();
