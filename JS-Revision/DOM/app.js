// let para = document.createElement('p');
// para.innerText = "Hey I an red";
// para.style.color = "red";

// document.body.append(para);

// let h = document.createElement('h3');
// h.innerText = "Hey I am blue";
// h.style.color = "blue";

// document.body.append(h);

// let div = document.createElement('div');
// div.style.border = "2px solid black";
// div.style.backgroundColor = "pink";

// let h1 = document.createElement('h1');
// h1.innerText = "Hey I'm in a div";

// div.append(h1);

// let p = document.createElement('p');
// p.innerText = "ME TOO!";
// div.append(p);

// document.body.append(div);

let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = "Click Me";
document.body.append(inp, btn);
inp.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");

let button = document.querySelector("#btn");
button.style.backgroundColor = "blue";
button.style.color = "white";

let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM PRactice</u>";
document.body.append(h1);

let p1 = document.createElement('p');
p1.innerHTML = "Apna college <b>Delta</b> hai";
document.body.append(p1);
