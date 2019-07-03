// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

$(document).ready(function() {
  // menu click event
  $(".menuBtn").click(function() {
    $(this).toggleClass("act");
    if ($(this).hasClass("act")) {
      $(".mainMenu").addClass("act");
    } else {
      $(".mainMenu").removeClass("act");
    }
  });
});
