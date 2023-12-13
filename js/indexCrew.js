const crewBoxes = document.querySelectorAll('.crewBox');

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