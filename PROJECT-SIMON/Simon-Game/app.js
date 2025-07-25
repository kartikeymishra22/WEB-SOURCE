let gameSeq = [];
let userSeq = [];

let gameStarted = false;
let level = 0;

let h3 = document.querySelector("h3");
let btns = ["red", "yellow", "green", "purple"];

document.addEventListener("keypress", function(){
    if(gameStarted == false){
        gameStarted = true;
        console.log("Game started");
    }

    levelUp();
})

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
        btn.classList.remove("flash");
   },250);
};

function levelUp(){
    level++;

    h3.innerText = "Level " + level;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randColor);
    console.log(randBtn);
    console.log(randIdx);
    btnFlash(randBtn);

}