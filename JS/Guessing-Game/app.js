const max = prompt("Enter the max number : ");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter the your guess : ");

while(true){
    if(guess == "quit"){
        console.log("user quits");
        break;
    }

    if(guess == random){
        console.log("right guess");
        break;
    }

    else if(guess < random){
        guess = prompt("hint: your guess was to small, please try again!:  ");
    }

    else{
        guess = prompt("hint: your guess was big please try again! :");
    }


}