const crewBoxes = document.querySelectorAll('.crewBox');
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const menu = document.querySelector(".mobileMenu");

crewBoxes.forEach(box => {
    // Find buttons and corresponding elements within each box
    const buttons = box.querySelectorAll('svg circle');    

    buttons.forEach((button, index) => {
        
        button.addEventListener('click', () => {
            // Hide all planet boxes
            crewBoxes.forEach(box => {
                box.classList.add('hidden');
            });
    
            // Show the corresponding planet box based on the button clicked
            crewBoxes[index].classList.remove('hidden');
            console.log(index);
        });
    });
});;

openBtn.addEventListener("click",function(){
    menu.classList.remove("hidden");
})

closeBtn.addEventListener("click",function(){
    menu.classList.add("hidden");
})

