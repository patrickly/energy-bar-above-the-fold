// var menuBtn = document.getElementsByClassName('menu-btn');
// var mobileMenu = document.getElementsByClassName('mobile-menu');
var searchingInput = document.getElementsByClassName('searching');
var searchIcon = document.getElementsByClassName('fa-search');

var clickedBtn = function() {
    // mobileMenu[0].classList.toggle('active');
    searchingInput[0].classList.toggle('act');
}

searchIcon[0].addEventListener('click', clickedBtn);
console.log('searchingInput:', searchingInput[0]);