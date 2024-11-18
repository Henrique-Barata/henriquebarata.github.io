this.img = '';
this.open_modal = false;
this.image_click = e => {
  let data = e.target.dataset;
  if (data.img) {
    this.img = data.img;
    this.open_modal = true;
  }
};

this.projects = [];

async function loadJSON() {
  const response = await fetch('../projects.json');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const jsonData = await response.json();
  return jsonData;
}

loadJSON().then(data => {
  this.projects = data.data;
}).catch(error => {
  console.error('Error loading JSON:', error);
});

this.setscr = () => {
  console.log(this.img);
  return this.img ? `style="${this.img}"` : '';
};

setTimeout(() => {
  this.loaded = "loaded";
}, 10);

const text = "My name is Ian Dunkerley, a front-end developer based in Torquay, Devon, UK. I have worked on a wide range of front-end projects, from DJ applications to eCommerce booking platforms, with[...]";

const words = text.split(' ');
this.words_els = [];
this.words_els = words.map((word, i) => {
  return `<span class="word">${word}</span> `;
});

const updateArrayWithDelay = (index = 0) => {
  if (index < this.words_els.length) {
    this.words_els[index] = this.words_els[index].replace('class="word"', 'class="word visible"');
    setTimeout(() => {
      updateArrayWithDelay(index + 1);
    }, 30);
  }
};

setTimeout(() => {
  updateArrayWithDelay();
}, 60);