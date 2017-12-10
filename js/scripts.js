var lsearch = document.querySelector('.user-search');
var llogin = document.querySelector('.user-login');
var lcart = document.querySelector('.cart-has-items');
var lfeedback = document.querySelector('.button-feedback');
var lclose = document.querySelector('.modal-close');

var msearch = document.querySelector('.user-search-modal');
var mlogin = document.querySelector('.user-login-modal');
var mcart = document.querySelector('.user-cart-modal');
var mfeedback = document.querySelector('.modal-fullscreen-wrapper');

var slider = document.querySelector('.slider-pagination');
var page = document.querySelector('.page-background')


/* slider switch */
slider.addEventListener('click', function(e) {
  console.log(e.target.value);
});

lsearch.addEventListener('click', function() {
  console.log('search');
  msearch.classList.toggle('modal-hidden');
});