let input1 = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = "Click Me";

document.querySelector("body").append(input1, btn);

input1.setAttribute('placeholder', 'username');
btn.setAttribute('id', 'btn');

// let btn = document.querySelector('#btn');
btn.classList.add('btnstyle');

let heading = document.createElement('h1');
heading.innerText = "DOM-Practice";
document.querySelector("body").prepend(heading);

heading.classList.add('hdstyle');

let para1 = document.createElement('p');
para1.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(para1);