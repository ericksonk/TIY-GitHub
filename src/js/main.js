jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
  console.log(arguments);
});

// jQuery.ajax({})

// IFFE example
// (function() {
//   // the code here is executed once in its own scope
// })();
//
// Calls from remote
// var octocatResult = $.ajax({ url: "https://api.github.com/users/octocat" });
//  console.log(octocatResult);
