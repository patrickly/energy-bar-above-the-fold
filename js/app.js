// var menuBtn = document.getElementsByClassName('menu-btn');
// var mobileMenu = document.getElementsByClassName('mobile-menu');
var searchingInput = document.getElementsByClassName('searching');
// var searchIcon = document.getElementsByClassName('search-icon');
// var xIcon = document.getElementsByClassName('fa-times');
var abc = document.getElementById("abc");
var xyz = document.getElementById("xyz");
var rButton = document.getElementById("rightButton");


var clickedBtn = function() {
    // mobileMenu[0].classList.toggle('active');
    searchingInput[0].classList.toggle('act');
    xyz.classList.toggle('active');
    abc.classList.toggle('fa-times');
    // abc.classList.toggle('act');
    console.log("clicked");
}

var logging = function (){
    
}
rButton.addEventListener('click', clickedBtn);

console.log("abc: ", abc);
console.log("xyz: ", xyz);

// console.log('searchingInput:', searchIcon[0]);




