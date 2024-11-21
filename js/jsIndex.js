const divs = document.querySelectorAll('.wrapper div');
const links = document.querySelectorAll('a');

divs.forEach(div => {
  div.addEventListener('click', () => {
    // Clear any existing animation classes
    div.classList.remove('disappear', 'flyOff', 'pop', 'reappear');

    // Randomly pick an animation type 'disappear','flyOff'
    const animations = ['disappear', 'flyOff'];
    const chosenAnimation = animations[Math.floor(Math.random() * animations.length)];

    // Apply the chosen animation
    div.classList.add('clicked', chosenAnimation);
    console.log('click:', chosenAnimation);

    // Handle reappear after a set timer, not after animationend
    setTimeout(() => {
      // Reappear after the timer
      div.classList.add('reappear');
      console.log('reappear added');

      // Remove the "reappear" class after its animation ends
      div.addEventListener('animationend', (event) => {
        if (event.animationName === 'animate') {
          div.classList.remove('reappear');
          console.log('reappear removed');
        }
      }, { once: true });
    }, 500); // Adjust this timer to control when the reappear starts
  });
});
