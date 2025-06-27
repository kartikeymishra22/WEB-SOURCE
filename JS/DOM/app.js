let para1 = document.createElement("p");
para1.innerText = "Hey I am red!";
document.querySelector("body").append(para1);
para1.classList.add("red");

let heading = document.createElement("h3");
heading.innerText = "I am a blue h3!";
document.querySelector("body").append(heading);
heading.classList.add("blue");

let div1 = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I am in a div";
para2.innerText = "ME TOO!";
div1.append(h1);
div1.append(para2);

div1.classList.add("pink");
document.querySelector("body").append(div1);
