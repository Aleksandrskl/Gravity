$(document).ready(function() {
$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<i class="fa fa-angle-left slider-arrows arrows-left"></i>',
  nextArrow: '<i class="fa fa-angle-right slider-arrows arrows-right"></i>',
  dots: true
  });
});