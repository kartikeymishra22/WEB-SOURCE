// let arr = ['january','july','march', 'august'];

// arr.splice(0,1);
// arr.splice(1,0,"june");

// console.log(arr); // Output: ['july', 'june', 'march', 'august']

// let lang = ['c','c++','html','javascript','python','java','c#', 'sql'];

// console.log(lang.reverse().indexOf('javascript'));


// let arr = [["x",null,'x'], [null,"x",null],['x',null,"x"]];

// let favourite = 'Avatar';

// let guess = prompt('What is your favourite movie?');

// while((guess != favourite) && (guess != "quit")){
//     console.log('Incorrect guess, try again!');
//     guess = prompt('What is your favourite movie?');

//     if(guess == favourite){
//         console.log('You guessed it right!');
//     }
//     else if(guess == "quit"){
//         console.log('You quit the game!');
//     }
//     else {
//         console.log('Incorrect guess, try again!');
//     }
// }

// let todo = [];

// let req = prompt('What do you want to do? (add, remove, list, quit)');

// while( true){
//     if(req == "add"){
//         let item = prompt('What do you want to add?');
//         todo.push(item);
//         console.log(`${item} added to the list.`);
//     }
//     else if(req == "delete"){
//         let item = prompt('Enter the idx : ');
//         todo.splice(item, 1);
//         console.log(`${item} removed from the list.`);
//     }

//     else if(req == "list"){
//         console.log("-------------");
//         for(let i = 0; i <todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log("-------------");
//     }
//     else if (req == "quit"){
//         console.log('You quit the game!');

//     }
//     else{
//         console.log('Invalid command, please try again!');
//     }

//     req = prompt('What do you want to do? (add, remove, list, quit)');
// }

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr); // Output: [1, 3, 4, 5, 6, 3]

// let number = 287152;

// let count = 0;
// let sum = 0;

// while(number > 0){
//     let digit = number % 10;
//     count++;
//     sum = sum + digit;
//     number = Math.floor(number / 10);
// }


// console.log(count); 
// console.log(sum); // Output: 6, since there are 6 digits in the number 287152

// const post = {
//     username : "kartikey_mishra_22",
//     content : "This is my first post",
//     likes : 120,
//     repost : 5,
//     tags : 10,
// };

/* This code snippet is creating an object named `obj` with multiple key-value pairs. */
// const obj = {
//     1 : 'a',
//     2 : 'b',
//     3 : 'c',
//     true : 'd',
//     null : 'e',
//     name : 'kartikey',
// };

// const classInfo = {
//     aman :{
//         roll : 1,
//         age : 20,
//         marks : 90,
//     },
//     kartikey : {
//         roll : 2,
//         age : 21,
//         marks : 95,
//     },
//     ankit : {
//         roll : 3,
//         age : 22,
//         marks : 85,
//     },
// };

// // console.log(classInfo.kartikey.roll); // Output: 2

// const arr = [
//     {
//         name : 'kartikey',
//         age : 21,
//         roll : 2,
//     },
//     {
//         name : 'aman',
//         age : 20,
//         roll : 1,
//     },
//     {
//         name : 'ankit',
//         age : 22,
//         roll : 3,
//     }
// ];

// console.log(arr[1].roll); // Output: 1

// const prompt = require('prompt-sync')();

// let max = prompt('Enter the maximum number: ');

// let number = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guesss a number : ");

// while(true){
//     if(guess == "quit"){
//         console.log('You quit the game!');
//         break;
//     }

//     else if (guess == number){
//         console.log('You guessed it right!');
//         break;
//     }

//     else if (guess < number){
//         console.log('Too low! Try again.');
//     }
//     else if(guess > number){
//         console.log('Too high! Try again.');
//     }
//     guess = prompt("guesss a number : ");
// }

// function rollDice(){
//     let num = Math.floor(Math.random() *5 ) + 1;
//     console.log(num);
// }

// rollDice();

let str = "aajfsdfsagfsdfg";

for(let i = 0; i<str.length; i++){
    console.log(str[i]);
}