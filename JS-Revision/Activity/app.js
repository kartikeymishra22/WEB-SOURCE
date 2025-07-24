let  btn = document.querySelector('#btn');

btn.addEventListener("click", function(){
    let randomColor = generateColor();
    let h1 = document.querySelector('h1');
    h1.innerText = randomColor;

    let div = document.querySelector('#box');
    div.style.backgroundColor = randomColor;

})

function generateColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);    
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}