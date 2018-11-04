require('./app.scss');
var objectFitImages = require('object-fit-images');
objectFitImages('.object-fit-image');

window.$ = window.jQuery = require('./js/jquery-3.3.1.min');

$(document).ready(function () {
  $(".menu .menu__item").on("click", ".scroll-nav", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});
