// let createCounter = function(n){
//     let initial = n;
//     return{
//         increment : function(){
//             return ++n;
//         },
//         decrement : function(){
//             return --n;
//         },
//         reset : function(){
//             n = initial;
//             return n;
//         },
//     }    
// }

// let counter = createCounter(5);

// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

let map = function(arr, fn){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(fn(arr[i]), i, arr);
    }
    return result;
}

let arr = [1,2,3];
const fn = (value, index, array) => value * 2; 

let r = map(arr, fn)
console.log(r);