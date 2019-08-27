// var menuBtn = document.getElementsByClassName('menu-btn');
// var mobileMenu = document.getElementsByClassName('mobile-menu');
var searchingInput = document.getElementsByClassName('searching');
// var searchIcon = document.getElementsByClassName('search-icon');
// var xIcon = document.getElementsByClassName('fa-times');
var abc = document.getElementById("abc");

var clickedBtn = function() {
    // mobileMenu[0].classList.toggle('active');
    searchingInput[0].classList.toggle('act');
    // searchIcon[0].classList.toggle('fa-times');
    // abc.classList.toggle('act');
    console.log("clicked");
}

var logging = function (){
    
}
abc.addEventListener('click', clickedBtn);

console.log("abc: ", abc);
// console.log('searchingInput:', searchIcon[0]);




