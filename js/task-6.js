/* const counterEl = document.querySelector('.counter');
const createBtn = document.querySelector('.create-element');
const destroyBtn = document.querySelector('.destroy-element');
const showElementsContainer = document.querySelector('.show-elements');

let counter = 1; 
let size = 30; 


function createElement() {
    counter++; 
    counterEl.textContent = counter; 

    const newElement = document.createElement('div'); 
    newElement.style.width = `${size}px`; 
    newElement.style.height = `${size}px`;
    newElement.style.backgroundColor = getRandomColor(); 
    newElement.style.display = 'inline-block';
    newElement.style.margin = '5px';

    showElementsContainer.appendChild(newElement); 
    size += 10; 
}


function destroyElement() {
    if (counter > 1) {
        counter--; 
        counterEl.textContent = counter;
    }

    const lastElement = showElementsContainer.lastElementChild;
    if (lastElement) {
        showElementsContainer.removeChild(lastElement); 
        size -= 10;
    }
}


function getRandomColor() {
    return `hsl(${Math.random() * 360}, 50%, 60%)`; 
}

createBtn.addEventListener('click', createElement);
destroyBtn.addEventListener('click', destroyElement); */


const counter = document.querySelector('.counter');
const create = document.querySelector('.create-element');
const destroy = document.querySelector('.destroy-element');
const show = document.querySelector('.show-elements');

let count = 1;
let size = 30;

create.addEventListener('click', createElement);
destroy.addEventListener('click', destroyElement);

function createElement(event) {
    count++;
    counter.textContent = count;

    const div = document.createElement('div');
    div.classList.add('created-element');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.display = 'inline-block';
    div.style.margin = '5px';


    show.insertAdjacentElement("beforeend", div);
    size += 10;
}

function destroyElement(event) {
    if (count > 1) {
        count--;
        counter.textContent = count;
    }

    const lastElement = show.lastChild;
    
    if (lastElement) {
        lastElement.remove();
        size -= 10;
    }

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

