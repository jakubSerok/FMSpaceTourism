const planetBoxes = document.querySelectorAll('.planetBox');
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const menu = document.querySelector(".mobileMenu");

planetBoxes.forEach(box => {
    // Find buttons and corresponding elements within each box
    const buttons = box.querySelectorAll('.links button');    

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Hide all planet boxes
            planetBoxes.forEach(box => {
                box.classList.add('hidden');
            });
    
            // Show the corresponding planet box based on the button clicked
            planetBoxes[index].classList.remove('hidden');
        });
    });
});;



openBtn.addEventListener("click",function(){
    menu.classList.remove("hidden");
})

closeBtn.addEventListener("click",function(){
    menu.classList.add("hidden");
})

