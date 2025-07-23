let btn = document.querySelector('#btn');

btn.addEventListener("click", function (){
    let h1 = document.querySelector("h1");
    let randomColor = generateColor();
    h1.innerText = randomColor;
    console.log("color updated");

    let div = document.querySelector('#p');
    div.style.backgroundColor = randomColor;
})

function generateColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}