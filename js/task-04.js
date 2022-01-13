let counterValue = 0;

const minus = document.querySelector('[data-action="decrement"]');

minus.addEventListener('click', () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
    console.log('Значення лічильника', counterValue);
});


const plus = document.querySelector('[data-action="increment"]');

plus.addEventListener('click', () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
       console.log('Значення лічильника', counterValue);
});



