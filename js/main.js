$(document).ready(function(){
  $('.slider').slick({
  	speed: 300,
 	slidesToShow: 3,
  	
  	variableWidth: true,
    prevArrow: $('.next'),
    nextArrow: $('.prev')
  });
});

	