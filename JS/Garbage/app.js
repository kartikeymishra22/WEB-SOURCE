// let light = "red";

// if (light ==="red") {
//     console.log("Stop");
// }

// if(light === "yellow") {
//     console.log("Slow down");
// }

// if(light === "green") {
//     console.log("Go");
// }

// let size = "xl";

// if(size === "xl") {
//     console.log("Extra Large");
// }
// else if(size === "l") {
//     console.log("Large");
// }
// else if(size === "m") {
//     console.log("Medium");
// }
// else{
//     console.log("Small");
// }


// l


// let num = prompt("Enter a number");

// if(num %10 == 0){
//     console.log("The number is divisible by 10");
// }
// else{
//     console.log("The number is not divisible by 10");
// }


// let name = prompt("Enter your name");
// let age = prompt("Enter your age");

// alert(`${name} is ${age} years old`);

// let num1 = 32;
// let num2 = 47852;

// if((num1%10)==(num2%10)){
//     console.log("The last digit of the two numbers are the same");
// }
// else{
//     console.log("The last digit of the two numbers are not the same")};

// let arr = [7,9,0,-2];
// let n = 3;

// let part = arr.slice(0,n);
// console.log(part);

// let part2 = arr.slice(arr.length-n);
// console.log(part2);

// let string = "Hello World";

// if(string.length>0){
//     console.log("The string is not empty");
// }
// else{
//     console.log("The string is empty");
// }


// let string = "    Hello World     ";

// console.log(string.trim());

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let result = arr.includes(5);
// console.log(result);


// let arr = [["x",0,"x"],[0,"x",0],["x",0,"x"]];

// console.log(arr);

// let arr1 = [[2,4],[3,6],[4,8]];

// console.log(arr1);

// let i = 1;

// while(i<=5){

//     console.log("Hello World");
//     if(i ==3){
//         break;
//     }

//     console.log(i);
//     i++;
// }


// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// let ans = [];

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] != num){
//         ans.push(arr[i]);
//     }
// }
// console.log(ans);

// let number = 287152;

// let sum = 0;
// let cnt = 0;

// while(number > 0){
//     let digit = number%10;
//     console.log("First number extracted");
//     sum = sum + digit;
//     cnt++;
//     number = Math.floor( number/10);
// }

// console.log(sum);
// console.log(cnt);

// let arr = [44,5,5,666,6643,66,45];

// let largest = 0;

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] > largest){
//         largest = arr[i]
// }

// }

// console.log(largest);

// let number = prompt("Enter the factorial Number : ");

// let sum = 1;

// for(let i = 1; i<=number; i++){
//     sum = sum * i;
// }

// console.log(sum);

// let number = Math.floor(Math.random() *6) + 1;

// console.log(number);

// const car = {
//     name : "BMW",
//     model : "M4",
//     color : "black"
// };

// console.log(car.name)

const Person = {
    name : "Kartikey",
    City : "Lucknow",
    age : 20,
};

Person.City = "New York";

console.log(Person.City);

Person.country = "USA";

console.log(Person);



