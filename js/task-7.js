const inputAdd = document.querySelector('.input-add-good');
const addGood = document.querySelector('#add-product-btn');
const deleteGood = document.querySelector('#delete-product-btn');
const deleteAllGoods = document.querySelector('#delete-all-product-btn');
const inputDelete = document.querySelector('#delete-by-number');
const list = document.querySelector('.list-goods'); 
let counter;

addGood.addEventListener('click', function (event) {
    const trimmedValue = inputAdd.value.trim();
    const arrayItems = Array.from(list.querySelectorAll('li'));
    counter = arrayItems.length + 1;
    if (trimmedValue === '') {
        alert('The field must not be empty');
    } else if (!findElement(arrayItems, trimmedValue)) {
        const li = document.createElement('li');
        li.textContent = `${counter}) ${trimmedValue}`;
        list.insertAdjacentElement('beforeend', li);
        inputAdd.value = '';
    }
});


function findElement(array, trimmedValue) {
    const dublicate = array.some(element => {
        const indexSlice = element.textContent.indexOf(')');
        const currentValue = element.textContent.slice(indexSlice + 1).trim();
        return currentValue.toLowerCase() === trimmedValue.toLowerCase();
    }); 
    if (dublicate) {
        alert('The field must not contain dublicate');
        return true;
    } else {
        return false;
    }
}

deleteGood.addEventListener('click', function (event) {
    const inputText = inputDelete.value.trim();
    const arrayItems = Array.from(list.querySelectorAll('li'));
    if (inputText !== '') {
        if (isNaN(Number(inputText))) {
            return alert('The field must contain only number');
        } else {
            const itemToDelete = arrayItems.find(item => {
                const indexSlice = item.textContent.indexOf(')');
                return item.textContent.slice(0, indexSlice) === inputText;
            });
            if (itemToDelete) {
                itemToDelete.remove();
                changeOrder(Array.from(list.querySelectorAll('li')));
            } else {
                alert('Item not found');    
            }
            inputDelete.value = '';
        }
    } else {
    if (arrayItems.length > 0) {
        counter = arrayItems.length - 1;
        arrayItems[arrayItems.length - 1].remove();
    }
    }
});

function changeOrder(array) {
    array.forEach((item, i) => {
        const indexSlice = item.textContent.indexOf(')');
        const currentValue = item.textContent.slice(indexSlice + 1).trim();
        item.textContent = `${i + 1}) ${currentValue}`;
    });
}

deleteAllGoods.addEventListener('click', function (event) {
    const arrayItems = Array.from(list.querySelectorAll('li'));
    if (arrayItems.length > 0) {
        list.innerHTML = '';
    }
});




