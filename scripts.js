//scroll menu over li menu
const liMenu = document.querySelector('.li-menu');
const scrollToEnd = document.querySelector('#scrollToEnd');

scrollToEnd.addEventListener('click',()=>{

});




// for size menu
const size = document.querySelector("#size");
const sizeMenu = document.querySelector(".size-menu");

size.addEventListener("click", () => {
  size.classList.toggle("active");
  sizeMenu.classList.toggle("active");
});

// for color menu

const color = document.querySelector("#color");
const colorMenu = document.querySelector(".color-menu");

color.addEventListener("click", () => {
  color.classList.toggle("active");
  colorMenu.classList.toggle("active");
});

// for length menu
const length = document.querySelector("#length");
const checkBox = document.querySelector(".checkBox");

length.addEventListener("click", () => {
  length.classList.toggle("active");
  checkBox.classList.toggle("active");
});

// for sleeve menu
const sleeve = document.querySelector("#sleeve");
const checkBox2 = document.querySelector(".checkBox2");

sleeve.addEventListener("click", () => {
  sleeve.classList.toggle("active");
  checkBox2.classList.toggle("active");
});

// for fabric menu
const fabric = document.querySelector("#fabric");
const checkBox3 = document.querySelector(".checkBox3");

fabric.addEventListener("click", () => {
  fabric.classList.toggle("active");
  checkBox3.classList.toggle("active");
});

// for detail menu
const detail = document.querySelector("#detail");
const checkBox4 = document.querySelector(".checkBox4");

detail.addEventListener("click", () => {
  detail.classList.toggle("active");
  checkBox4.classList.toggle("active");
});

// for price menu
const price = document.querySelector("#price");
const checkBox5 = document.querySelector(".checkBox5");

price.addEventListener("click", () => {
  price.classList.toggle("active");
  checkBox5.classList.toggle("active");
});

// for back to top button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 700) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


// const button = document.querySelector(".cta-hover");
// const sizee = document.querySelector(".select-size");
// const closee = document.querySelector(".close");

//   button.addEventListener("click", ()=> {
//     sizee.classList.add('active');
//   });


//   closee.addEventListener("click", ()=> {
//     sizee.classList.remove('active');
//   });

// var allButtonsOnPage = document.querySelectorAll(".cta-hover");
// var sizee = document.querySelector(".select-size");
// var closebtn = document.querySelector(".close");

// allButtonsOnPage.forEach(function(button,index){
//   button.addEventListener('click', function(){
//     sizee.classList.add('active');
//   });

//   closebtn.addEventListener('click', function(){
//     sizee.classList.remove('active');
//   });
// });


document.addEventListener("DOMContentLoaded", function(event) { // <-- add this wrapper
  let element = document.querySelectorAll('.select-size .size');
  if (element) {
      element.forEach(function(el, key){
          el.addEventListener('click', function () {
          el.classList.toggle("active");
              element.forEach(function(ell, els){
                  if(key !== els) {
                      ell.classList.remove('active');
                  }
              });
          });
      });
  }

  function Showhide(classList){
      if (classList) {
          
          classList.forEach(function(el, key){
            
             el.addEventListener('click', function () {
                console.log(el);
             
  
                if (el.nextElementSibling != null) {
                      el.nextElementSibling.classList.toggle("active");
                }
             });
          });
      }
  }

  let classList1 = document.querySelectorAll('.cta-hover');
  Showhide(classList1);
  const closee = document.querySelectorAll(".close");

  if (closee) {
      closee.forEach(function (el, key) {
          el.addEventListener('click', function () {
          let selectSize = document.querySelectorAll(".select-size");
          selectSize.forEach(function (el, key) {
              if (el.className == "select-size active") {
                  el.classList.remove('active');
              }
          })
          })
      })
  }
});




// ----------ACCORDION
const accordion = document.getElementsByClassName('contentBox');
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}
// --------//ACCORDION


const slide= document.querySelectorAll('.toclick');
for (i = 0; i < slide.length; i++) {
        slide[i].addEventListener('click', function () {
            this.classList.toggle('active')
          });
};



// sidenav ----------  //
const add = document.querySelector('#to-sidenav');
const mainbody = document.querySelector('.to-none')
add.addEventListener('click', function () {
 $(this).toggleClass('open');
  document.querySelector('.sidenav').classList.toggle('active');
  mainbody.classList.toggle('active')
})

// -----------------hamburger
