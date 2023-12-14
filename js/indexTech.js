const techBox = document.querySelectorAll('.techBox');
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const menu = document.querySelector(".mobileMenu");
techBox.forEach(box => {
    // Find buttons and corresponding elements within each box
    const buttons = box.querySelectorAll('.techButtons button');    

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Hide all planet boxes
            techBox.forEach(box => {
                box.classList.add('hidden');
            });
    
            // Show the corresponding planet box based on the button clicked
            techBox[index].classList.remove('hidden');
        });
    });
});;


openBtn.addEventListener("click",function(){
    menu.classList.remove("hidden");
})

closeBtn.addEventListener("click",function(){
    menu.classList.add("hidden");
})

