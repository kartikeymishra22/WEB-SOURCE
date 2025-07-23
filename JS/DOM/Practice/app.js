// let para = document.createElement("p");
// para.textContent = "Hey I am red";
// document.body.append(para);
// para.style.color = "red";

// let h3 = document.createElement("h3");
// h3.textContent = "I am a blue h3!";
// h3.style.color = "blue";
// document.body.append(h3);

// let div = document.createElement("div");
// div.style.border = "2px solid black";
// div.style.backgroundColor = "pink";

// let h1 = document.createElement("h1");
// h1.textContent = "I am in a div";
// let p = document.createElement("p");
// p.textContent = "ME TOO!";

// div.append(h1);
// div.append(p);

// document.body.append(div);

let input = document.createElement("input");
let btn = document.createElement("button");
btn.textContent = "click me";

document.body.append(input, btn);

input.setAttribute("placeholder", "username");
btn.setAttribute("id","btn");

// let btn = document.querySelector("#btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.style.color = "purple";
document.body.append(h1);
h1.style.textDecoration = "underline";

let para = document.createElement("p");
para.innerHTML = "Apna college <b>Delta</b> practice";
document.body.append(para);