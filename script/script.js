$(document).ready(function() {
   $(".header__burger").click(function(event) {
      $(".header__burger,.header__menu").toggleClass("active");

   });
});




jQuery(document).ready(function($) {
$('button').on('click', function() {
  if ( $(this).hasClass('button__down') ) {
    var movePos = $(window).scrollTop() + $(window).height();
  }
  
  $('html, body').animate({
    scrollTop: movePos}, 600);
});
});