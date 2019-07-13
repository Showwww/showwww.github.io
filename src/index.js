import "../assets/scss/style.scss"
import $ from "jquery"
import "bootstrap"

$(document).ready(function () {

  function plus(a, b) {
    return a + b;
  }

  const carouselOptions = {
    interval: 10000,

  };

  $('.carousel').carousel(carouselOptions);

});
