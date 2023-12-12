const planetBoxes = document.querySelectorAll('.planetBox');

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