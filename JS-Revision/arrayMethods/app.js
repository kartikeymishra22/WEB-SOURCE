// // let arr = [1,2,3,4,5,6,7];

// // // for(let i = 0; i<arr.length; i++){
// // //     console.log(arr[i]);
// // // }

// // arr.forEach(function (el){
// //     console.log(el);
// // })

// let arr = [
//     {
//         name : "Kartikey",
//         marks : 95,
//     },
//     {
//         name: "Rajat",
//         marks : 77,
//     },
//     {
//         name: "Atul",
//         marks: 88,
//     }
// ];

// arr.forEach(function(student){
//     console.log(`${student.name} and marks are ${student.marks}`);
// });

// let arr = [1,2,3,4];

// // let result = arr.every((el) =>{
// //     return el % 2 == 0;
// // });

// // console.log(result);

// let result1 = arr.some((el) =>{
//     return el%3 ==0;
// });

// console.log(result1);

// let arr = [1,2,3,4,5, 1,9,6,7,8];

// let finalVal = arr.reduce((res, el) =>{
//     console.log(res, el);
//     return res + el;
// });

// console.log(finalVal);

// let result = arr.reduce((max, el) =>{
//     console.log(max, el);
//     if(el > max){
//         return el;
//     }
//     else{
//          return max;
//     }
// });

// console.log(result);

// let arr = [2,3,4,5,6, 1];

// let result = arr.reduce((min, el) =>{
//     console.log(min, el);
//     if(min < el){
//         return min ;
//     }
//     else{
//         return el;
//     }
// });

// console.log(result);

// let arr = [1,2,3,4,5];

// let newArr1 = [...arr];
// newArr1.push(6);
// console.log(arr);

// let newArr = arr;
// newArr.push(9);

// console.log(newArr1);
// console.log(arr);
// console.log(newArr);
// console.log(arr);

const user = { name: "Kartikey", age: 20, city: "Delhi" };

const { name, ...spread } = user;

console.log(name); // Kartikey
console.log(spread); // { age: 20, city: "Delhi" }


