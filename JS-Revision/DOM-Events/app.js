let btns = document.querySelectorAll('button');

function sayHello(){
    console.log("button clicked");
}

for(btn of btns){
    btn.onclick = sayHello;
}