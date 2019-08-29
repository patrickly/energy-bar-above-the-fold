// var menuBtn = document.getElementsByClassName('menu-btn');
// var mobileMenu = document.getElementsByClassName('mobile-menu');
var searchingInput = document.getElementsByClassName('searching');
// var searchIcon = document.getElementsByClassName('search-icon');
// var xIcon = document.getElementsByClassName('fa-times');
var abc = document.getElementById("abc");
var xyz = document.getElementById("xyz");
var rButton = document.getElementById("rightButton");
var cartIcon = document.getElementById("cart-icon");
var shopModal = document.getElementById("shop-modal");


var clickedBtn = function() {
    // mobileMenu[0].classList.toggle('active');
    searchingInput[0].classList.toggle('act');
    xyz.classList.toggle('active');
    abc.classList.toggle('fa-times');
    // abc.classList.toggle('act');
    console.log("clicked");
}


var clickedBtnShop = function() {
    shopModal.classList.toggle('show');
}
var logging = function (){
    
}
rButton.addEventListener('click', clickedBtn);

console.log("abc: ", abc);
console.log("xyz: ", xyz);

console.log("shop-modal: ", shopModal);

// console.log('searchingInput:', searchIcon[0]);

function mouseOver () {
    console.log("over");
    shopModal.classList.toggle('show');
}

function mouseOut () {
    console.log("out");
    shopModal.classList.toggle('show');

}
cartIcon.addEventListener("mouseover", mouseOver);
cartIcon.addEventListener("mouseout", mouseOut);
shopModal.addEventListener("mouseover", mouseOver);
shopModal.addEventListener("mouseout", mouseOut);


cartIcon.addEventListener('click', clickedBtnShop);


// https://stackoverflow.com/questions/34554373/how-to-detect-onclick-event-only-smart-phone-and-tablet-using-javascript


/*
function isMobileOrTablet() {
    if (navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)
    ) {
     return true;
    }else {
     return false;
    }
   }

console.log("mobile or tablet:", isMobileOrTablet());

if(isMobileOrTablet()===true){
    console.log("yoe")

} 

if(isMobileOrTablet()===false){
    console.log("yoee")

    //rButton.addEventListener('click', clickedBtn);

    // cartIcon.addEventListener("mouseover", mouseOver);
    // cartIcon.addEventListener("mouseout", mouseOut);
    // shopModal.addEventListener("mouseover", mouseOver);
    // shopModal.addEventListener("mouseout", mouseOut);
}



*/