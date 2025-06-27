const student = {
    name: 'John Doe',
    age: 20,
    marks : 89,
    prop :this,

    greet : function(){
        console.log(this);
        return this.name;
    },
    getMarks : ()=>{
        console.log(this);
        return this.age;
    }
};
// console.log(student.greet());

// console.log(student.prop);

// console.log(student.getMarks());

// let att = [1,2,3,4,5,6,7,8,9,10];

// let print = att.forEach((el) =>{
//     console.log(el);
// });

// console.log(print);

// function toPrint(el){
//     console.log(el);
// }

// att.forEach(toPrint);
//  att.forEach((el) =>{
//     console.log(el);
// });

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let print = arr.every((el) =>{
//     return el > 5;
// });

// let print1 = arr.some((el) =>{
//     return el > 5;
// });

// console.log(print); // false
// console.log(print1); // true

let arr = [1,2,3,4];

let squre = arr.map((el) =>{
    return el * el;
});

console.log(squre); // [1, 4, 9, 16]