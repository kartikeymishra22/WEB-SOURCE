// console.log("JS file connected successfully");

// let color = "green";

// if (color === "red"){
//     console.log("stop!, the color is red");
// };

// if (color === "yellow"){
//     console.log("caution!, the color is yellow");
// };

// if (color === "green"){
//     console.log("go!, the color is green");
// };

// let size =  "xl";

// if (size == "xl"){
//     console.log("price is 250");
// }

// else if (size == "l"){
//     console.log("price is 200");
// }

// else if (size == "m"){
//     console.log("price is 150");
// }

// else{
//     console.log("size not available");
// }

// let string = "hello";

// if(string.length > 13 &&  string[0] == "a"){
//     console.log("it is a good string");
// }else{
//     console.log("it is not a good string");
// }

// let arr1 = ["january", "july", "august", "december"];

// arr1.shift();
// arr1.shift();

// arr1.unshift("july", "june");
// console.log(arr1);

// let arr1 = ["january", "july", "august", "december"];

// arr1.splice(0, 2, "july", "june");
// console.log(arr1);

// let arr = [7,9,0,2];
// arr.slice(0,3);
// console.log(arr.slice(0,3));

// let n = 3;

// let ans = arr.slice(arr.length - n);
// console.log(ans);

// let arr = ["hello", 'a', 44, 65 , 11];
// let item = 65;

// if(arr.includes(item)){
//     console.log("item is present");
// }else{
//     console.log("item is not present");
// }

// let arr = [1,2,3,4,5,6,2,3];

// let arr1 = [];

// for(let i = 0; i < arr.length; i++){
//     if (arr[i] != 2){
//         arr1.push(arr[i]);
//     }
// }

// console.log(arr1);

// for(let i = 0; i < arr.length; i++){
//     if (arr[i] == 2){
//         arr.splice(i,1);
//         // i--; // Adjust index after removal
//     }
// }

// console.log(arr);

// let arr1 = [1,2,3,4,5,6,2,3];

// for(num of arr1){
//     console.log(num);
// }

// let lists = [[1,2,3], [4,5,6], [7,8,9]];

// for(nums of lists){
//     for(num of nums){
//         console.log(num);
//     }
// }

// for(let i = 0; i < lists.length; i++){
//     console.log(`list ${i+1}:`);
//     for(let j = 0; j < lists[i].length; j++){
//         console.log(lists[i][j]);
//     }
// }

const favMovie = "Avatar";

let guess = prompt("Guess the movie name");

while((guess !== favMovie) && (guess !== "quit")){
    guess = prompt("Wrong guess, try again or type 'quit' to exit");
}

if (guess === favMovie){
    console.log("Congratulations! You guessed the movie correctly.");
}
else{
    console.log("You quitted the game. Better luck next time!");
}