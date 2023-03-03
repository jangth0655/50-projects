const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

const scale = (number, [inMin, inMax], [outMin, outMax]) => {
  return ((number - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
};

const blurring = () => {
  load++;
  if (load > 99) {
    clearInterval(int);
  }

  loadText.textContent = `${load} %`;
  loadText.style.opacity = scale(load, [0, 100], [1, 0]);
  bg.style.filter = `blur(${scale(load, [0, 100], [30, 0])}px)`;
};

let int = setInterval(blurring, 30);
