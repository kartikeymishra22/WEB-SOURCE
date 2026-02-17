// function hello(){
//     console.log("Hello World");
// }

// hello();

// function sum(a,b){
//     return a+b;
// }

// let result = sum(5,10);
// console.log(result);

// function table(num){
//     for(let i=1; i<=10; i++){
//         console.log(`${num} x ${i} = ${num*i}`);
//     }
// }

// table(5);

// const student = {
//     name: "John",
//     age: 20,
//     city: "New York",
// };

// console.log(student.name);

// try{
//     console.log(x);
// } catch(error){
//     console.log("An error occurred: " + error.message);
// }

// [1,2,3].forEach(function(num) {
//     console.log(num);
// });

const sum = (a, b) => a + b;

console.log(sum(5, 10));
console.log(sum.this); // Arrow functions do not have their own 'this' context