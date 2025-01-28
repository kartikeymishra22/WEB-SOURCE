let favourite = "Avatar";

let guess = prompt("Guess the movie");

while(guess != favourite && guess != "quit"){
    console.log("wrong");
    guess = prompt("Guess the movie");

    if(guess == favourite){
        console.log("correct");
    }

    else{
        console.log("quit");
    }
}