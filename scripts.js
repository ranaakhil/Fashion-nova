const button = document.querySelector(".cta-hover");
const size = document.querySelector(".select-size");
const closee = document.querySelector(".close")

button.addEventListener("click", ()=>{
    size.classList.add("active");
});

closee.addEventListener("click", ()=>{
    size.classList.remove("active");
})