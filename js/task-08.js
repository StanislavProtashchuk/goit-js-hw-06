const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
    
function onFormSubmit(event) {
    event.preventDefault();

    let formData = {};

    const { elements: { email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!');
    }

    formData.email = `${email.value}`;
    formData.password = `${password.value}`;
    console.log(formData);

    event.currentTarget.reset();
   } 
