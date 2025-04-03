const form = document.querySelector('.login-form');

// 1-ий варіант

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const login = this.elements.email.value;
    const password = this.elements.password.value;
    let result;

    if (login.trim() === '' || password.trim() === '') {
        alert('All form fields must be filled in');
    } else {
        result = {
            email: login.trim(),
            password: password.trim()
        };
        console.log(result);
        this.reset(); 
    }
})


// 2-ий варіант 

/* form.addEventListener('submit', function (event) {
    event.preventDefault();
    let isEmpty = false;
    let result;

    const inputs = this.querySelectorAll('input');

    inputs.forEach(input => {
        if (input.value.trim() === '') isEmpty = true;
    });

    if (isEmpty) {
        alert('All form fields must be filled in');
    } else {
        result = {
            email: this.elements.email.value.trim(),
            password: this.elements.password.value.trim()
        };
        console.log(result);
        this.reset();
    }
}) */