// function sayHello(){
//     console.log("Hello world");
// }

// sayHello();

// function printPoem(){
//     console.log("Twinkle Twinkle little star");
// }

// printPoem();

// function rollDice(){
//     let dice = Math.floor(Math.random() * 6) + 1;
//     console.log("You rolled a " + dice);
// }

// rollDice();


// function sum(a,b){
//     console.log(a+b);
// }

// sum(4,5);

// function avg(a,b,c){
//     let total = a + b + c /3;
//     console.log(total);
// }

// avg(3,3,3);

// function table(n){
//     for(let i = 1; i<=10; i++){
//         console.log(`The table of ${n} is ${i} * ${n} = ${n * i}`);
//     }
// }

// table(5);

// function sum(n){
//     let sum  = 0;
//     for(let i = 1; i<=n; i++){
//         sum = sum + i;
//     }

//     return sum;
// }

// console.log("The sum is " + sum(5))


// function multipleGreet(func, n){
//     for(let i = 0; i<n; i++){
//         func();
//         console.log("Function called");
//     }

// }

// let greet = function(){
//     console.log("Hello world");

// }

// multipleGreet(greet, 5);

// function unique(str){
//     let ans = " ";
//     for(let i = 0; i<str.length; i++){
//         if(!ans.includes(str[i])){
//             ans += str[i];
//         }
//     }
//     return ans;
// }

// let str = "aabbbdsjsddhash";

// let result = unique(str);
// console.log(result);

// function higher(list){
//     let largest = list[0];
//     for(let i = 0; i<list.length; i++){
//         if(largest.length < list[i].length){
//             largest = list[i];
//         }
//     }
//     return largest;
// }

// let list = ["Australia", "Germany", "United States of America"];

// let result = higher(list);
// console.log(result);

// console.log(list[0]);

// function vowels(str){
//     let cnt = 0;
//     for(let i = 0; i<str.length; i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//             cnt++;
//         }
//     }
//     return cnt;
// }


// let str = "jfdafguafdsfsagh";

// console.log(vowels(str));

// function number(start, end){
//     let n = end - start;
//     return Math.floor(Math.random() * n) + start;
// }

// let start = (prompt("Enter the starting number"));

// let end = prompt("Enter the ending number");

// console.log(number(start, end));

// setTimeout(()=>{
//     console.log("apna college");
// }, 4000);

// console.log("Welcome to");
// let id = setInterval(()=>{
//     console.log("apna college");
// },2000);

// function arrayAvg(arr){
//     let avg = 0;
//     for(let i = 0; i<arr.length; i++){
//         avg += arr[i]/arr.length;
//     }
//     return avg;
// }
// let sum = (arr)=>{
//     let avg = 0;
//     for(let i = 0; i<arr.length; i++){
//         avg += arr[i]/arr.length;
//     }
//     return avg;
// }


// let arr = [12,34,67,89,99];

// console.log(arrayAvg(arr));

// console.log(sum(arr));

// let isEven = (n) =>{
//     if(n%2 != 0){
//         console.log("The number " + n + " is not even");
//     }
//     else{
//         console.log("The number " + n + " is even");
//     }
// }

// let n = (prompt("Enter the number"));

// isEven(n);


// function create(func){
//     return func();
// }

// let greet = function(){
//     console.log("Hello world");
// }

// create(greet);

let createCounter = function(n){
    return function(){
        return n++;
    }
}

let m = prompt("Enter the number you want to increment : ");


let counter = createCounter(m);
let n = prompt("Enter the number, How many times you want to increment : ");

for(let i = 1; i<=n ; i++){
    console.log(counter());
}



