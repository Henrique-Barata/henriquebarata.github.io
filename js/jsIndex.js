// Select all div elements inside the wrapper
const divs = document.querySelectorAll('.wrapper div');
console.log("Pop the bubbles!");
// Add click event listeners to the divs
divs.forEach(div => {
  div.addEventListener('click', () => {
    // Remove previously assigned animation classes
    div.classList.remove('disappear', 'flyOff', 'pop');
    
    // Randomly choose an animation
    const animations = ['disappear', 'flyOff', 'pop'];
    const chosenAnimation = animations[Math.floor(Math.random() * animations.length)];
    
    // Add the "clicked" class and the chosen animation class
    div.classList.add('clicked', chosenAnimation);
  });
});