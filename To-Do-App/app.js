let todo = [];

let req = prompt("Enter the task");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    else if(req == "list"){
        console.log("------------");
        for(let i = 0; i<todo.length; i++){
            console.log(todo[i]);
        }
        console.log("-------------");
    }

    else if(req == "add"){
        let task = prompt("Enter the task to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let idx = prompt("Enter the idx to delete");
        todo.splic(idx, 1);
        console.log("task deleted");
    }
    else{
        console.log("Invalid req.");
    }

    req = prompt("Enter your request: ");
}