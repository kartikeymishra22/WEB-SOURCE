let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let button = document.querySelector('#myButton');

function changeColor(){
    this.style.backgroundColor = 'blue';
    console.log(this);
}

h1.addEventListener('click', changeColor);
p.addEventListener('click', changeColor);
button.addEventListener('click', changeColor);