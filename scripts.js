// for size menu
const size = document.querySelector("#size");
const sizeMenu = document.querySelector(".size-menu");

size.addEventListener('click',()=>{
size.classList.toggle('active');
sizeMenu.classList.toggle('active');
});

// for color menu

const color = document.querySelector("#color");
const colorMenu = document.querySelector(".color-menu");

color.addEventListener('click',()=>{
color.classList.toggle('active');
colorMenu.classList.toggle('active');
});


// for length menu
const length = document.querySelector("#length");
const checkBox = document.querySelector(".checkBox");

length.addEventListener('click',()=>{
length.classList.toggle('active');
checkBox.classList.toggle('active');
});


// for sleeve menu
const sleeve = document.querySelector("#sleeve");
const checkBox2 = document.querySelector(".checkBox2");

sleeve.addEventListener('click',()=>{
sleeve.classList.toggle('active');
checkBox2.classList.toggle('active');
});


// for fabric menu
const fabric = document.querySelector("#fabric");
const checkBox3 = document.querySelector(".checkBox3");

fabric.addEventListener('click',()=>{
fabric.classList.toggle('active');
checkBox3.classList.toggle('active');
});


// for detail menu
const detail = document.querySelector("#detail");
const checkBox4 = document.querySelector(".checkBox4");

detail.addEventListener('click',()=>{
detail.classList.toggle('active');
checkBox4.classList.toggle('active');
});


// for price menu
const price = document.querySelector("#price");
const checkBox5 = document.querySelector(".checkBox5");

price.addEventListener('click',()=>{
price.classList.toggle('active');
checkBox5.classList.toggle('active');
});






const button = document.querySelector(".cta-hover");
const sizee = document.querySelector(".select-size");
const closee = document.querySelector(".close")

button.addEventListener("click", ()=>{
    sizee.classList.add("active");
});

closee.addEventListener("click", ()=>{
    sizee.classList.remove("active");
})


// load more button functionality //
$(document).ready(function(){
    $(".more").slice(0,8).fadeIn();
    $(".load-more").click(function(){
        $(".more").slice(0,12).fadeIn();
    });
});

// const loadmore = document.querySelector(".load-more");
// const elementList = document.querySelector("#adding");
// let currentItems = 4;

//     for(let i = currentItems; i<currentItems+4; i++){
    
//         loadmore.addEventListener("click", ()=>{
//             elementList.classList.add('show-loader');
//             currentItems +=4;
//         })
//     }
   

    

// load more button functionality //