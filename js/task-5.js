function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeColor = document.querySelector('.change-color');
const color = document.querySelector('.widget .color');

changeColor.addEventListener('click', changeBackColor);

function changeBackColor(event) {
  const rundomColor = getRandomHexColor();
  color.textContent = rundomColor;
  body.style.backgroundColor = rundomColor;
}