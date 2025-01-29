let todo = [];

let task = prompt("Enter your tasks");

while(true){
    if(task == "quit"){
        console.log("quitting app");
        break;
    }

    else if( task == "list"){
        console.log("----------------");
        for(let i = 0 ; i < todo.length ; i++){
            console.log(i, todo[i]);
        }
        console.log("----------------");
    }

    else if(task == "add"){
        let newtask = prompt("Enter the new task you want to add");
        todo.push(newtask);
        console.log("task added");
    }
    else if(task == "delete"){
        let idx = prompt("Enter the idx want to delete :");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("invalid input");
    }
    task = prompt("Enter your tasks");
}