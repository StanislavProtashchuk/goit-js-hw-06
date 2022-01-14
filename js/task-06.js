const input = document.querySelector('#validation-input');
const inputLength = input.dataset.length;

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log(event.currentTarget.value.length)
    input.classList.add('invalid');
    if (event.currentTarget.value.length === Number(inputLength)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
}