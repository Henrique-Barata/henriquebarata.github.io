const divs = document.querySelectorAll('.wrapper div');

divs.forEach(div => {
  div.addEventListener('click', () => {
    // Clear any existing animation classes
    div.classList.remove('disappear', 'flyOff', 'pop', 'reappear');

    // Randomly pick an animation type
    const animations = ['disappear', 'flyOff', 'pop'];
    const chosenAnimation = animations[Math.floor(Math.random() * animations.length)];

    // Apply the chosen animation
    div.classList.add('clicked', chosenAnimation);

    // Trigger a burst effect
    const rect = div.getBoundingClientRect();
    const burst = new mojs.Burst({
      left: rect.left + rect.width / 2,
      top: rect.top + rect.height / 2,
      radius: { 0: 50 },
      count: 10,
      children: {
        shape: 'circle',
        fill: ['#FF0A47', '#2FB5F3', '#FF0AC2', '#47FF0A'],
        radius: { 5: 10 },
        duration: 1000,
        easing: 'quad.out'
      }
    });
    burst.play();

    // Handle reappear after animation ends
    div.addEventListener('animationend', (event) => {
      if (animations.includes(event.animationName)) {
        // Remove current animation classes
        div.classList.remove('clicked', 'disappear', 'flyOff', 'pop');

        // Add "reappear" class after a short delay
        setTimeout(() => {
          div.classList.add('reappear');

          // Clean up the "reappear" animation class after it finishes
          div.addEventListener('animationend', (event) => {
            if (event.animationName === 'animate') {
              div.classList.remove('reappear');
            }
          }, { once: true });
        }, 500); // Adjust the delay to control reappear timing
      }
    }, { once: true });
  });
});