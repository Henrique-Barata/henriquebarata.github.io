const divs = document.querySelectorAll('.wrapper div');
const links = document.querySelectorAll('a');

links.forEach(link => link.addEventListener('mouseenter', shootLines));

function shootLines(e) {
  const itemDim = this.getBoundingClientRect(),
        itemSize = {
          x: itemDim.right - itemDim.left,
          y: itemDim.bottom - itemDim.top,
        },
        shapes = ['line', 'zigzag'],
        colors = ['#2FB5F3', '#FF0A47', '#FF0AC2', '#47FF0A'];
  
  const chosenC = Math.floor(Math.random() * colors.length),
        chosenS = Math.floor(Math.random() * shapes.length);
  
  // create shape
  const burst = new mojs.Burst({
    left: itemDim.left + (itemSize.x / 2),
    top: itemDim.top + (itemSize.y / 2),
    radiusX: itemSize.x,
    radiusY: itemSize.y,
    count: 8,
    
    children: {
      shape: shapes[chosenS],
      radius: 10,
      scale: {0.8: 1},
      fill: 'none',
      points: 7,
      stroke: colors[chosenC],
      strokeDasharray: '100%',
      strokeDashoffset: { '-100%' : '100%' },
      duration: 350,
      delay: 100,
      easing: 'quad.out',
      isShowEnd: false,
    }
  });
  
  burst.play();
}

divs.forEach(div => {
  div.addEventListener('click', () => {
    // Clear any existing animation classes
    div.classList.remove('disappear', 'flyOff', 'pop', 'reappear');

    // Randomly pick an animation type
    const animations = ['disappear', 'flyOff', 'pop'];
    const chosenAnimation = animations[Math.floor(Math.random() * animations.length)];

    // Apply the chosen animation
    div.classList.add('clicked', chosenAnimation);

    // If the chosen animation is "pop", trigger shootLines
    if (chosenAnimation === 'pop') {
      shootLines.call(div); // Trigger shootLines effect on the clicked div
    }

    // Handle reappear after a set timer, not after animationend
    setTimeout(() => {
      // Reappear after the timer
      div.classList.add('reappear');

      // Remove the "reappear" class after its animation ends
      div.addEventListener('animationend', (event) => {
        if (event.animationName === 'reappear') {
          div.classList.remove('reappear');
        }
      }, { once: true });
    }, 500); // Adjust this timer to control when the reappear starts
  });
});
