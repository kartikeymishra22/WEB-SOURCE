let toDo = [];

let task = prompt("What do you want to do?");

while(true){
    if(task == "quit"){
        console.log("Goodbye!, you quited the app.");
        break;
    }
    else if(task == "add"){
        let newTask = prompt("Enter a new task");
        toDo.push(newTask);
        console.log(`${newTask} added to the list`);
    }
    else if(task == "delete"){
        let deleteTask = prompt("Enter task to delete");
        for(let i = 0; i < toDo.length; i++){
            if(toDo[i] === deleteTask){
                toDo.splice(i, 1);
                console.log(`${deleteTask} deleted from the list`);
            }
            else{
                console.log(`${deleteTask} not found in the list`);
            }
        }
    }
    else if(task == "list"){
        console.log("To-Do List:");
        for(let i = 0; i < toDo.length; i++){
            console.log(i, toDo[i]);
        }
    }
    else{
        console.log("Invalid command. Please enter 'add', 'delete', 'list', or 'quit'.");
    }
    task = prompt("What do you want to do?");
}