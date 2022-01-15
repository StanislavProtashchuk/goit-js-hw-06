
const body = document.querySelector('body');
const onButtonEvent = document.querySelector('.change-color');
const color = document.querySelector('.color');


onButtonEvent.addEventListener('click', changeColor);

function changeColor(event) {
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
  console.log(body.style.backgroundColor);
}

