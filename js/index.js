const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const menu = document.querySelector(".mobileMenu");

openBtn.addEventListener("click",function(){
    menu.classList.remove("hidden");
})

closeBtn.addEventListener("click",function(){
    menu.classList.add("hidden");
})

