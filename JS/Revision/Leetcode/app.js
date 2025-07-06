// let object = {
//     name: "John",
//     age: 30,
//     city: "Nagpur",
// }

// console.log(object.name);
// console.log(object.age);

let createOb = function(val){
    return {
            toBe : (n) =>{
                if(val=== n){
                    return true;
                }
                else{
                    return "Not Equal";
                }
            },
            notTobe : (n) =>{
                if(val !== n){
                    return true;
                }
                else{
                    return "Equal";
                }
            }
        }
}

console.log(createOb(4));