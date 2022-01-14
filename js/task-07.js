const controller = document.querySelector('#font-size-control');
const textLevel = document.querySelector('#text');

controller.addEventListener('input', onInputChange);

function onInputChange(event) {
    const level = event.currentTarget.value;
    textLevel.style.fontSize = `${level}px`;
    console.log(event.currentTarget.value);
}

