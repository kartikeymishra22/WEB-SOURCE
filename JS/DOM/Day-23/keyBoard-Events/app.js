// let btn = document.querySelector("button");

// btn.addEventListener("click", function(e){
//     console.log(e);
//     console.log("Button clicked!");
// })

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("Key pressed -> ", event.key);
    console.log("Key code -> ", event.code);

    if(event.code == "KeyU"){
        console.log("You pressed the 'U' key!");
    } else if(event.code == "KeyD"){
        console.log("You pressed the 'D' key!");
    }else if(event.code == "KeyL"){
        console.log("You pressed the 'L' key!");
    }
    else if(event.code == "KeyR"){
        console.log("You pressed the 'R' key!");
    } else {
        console.log("You pressed a different key!");
    }
})