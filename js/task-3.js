const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
    const trimmedValue = event.currentTarget.value.trim();
    output.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;  
});

