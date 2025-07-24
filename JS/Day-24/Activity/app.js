let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    // console.log("clicked");
    let li = document.createElement("li");
    let btn1 = document.createElement("button");
    btn1.textContent = "Delete Task";
    btn1.classList.add("delete");
    li.textContent = input.value;
    li.appendChild(btn1);
    input.value = ""; // Clear the input field after adding the item
    ul.appendChild(li);
 })

 ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
 })

//  let delBtns = document.querySelectorAll(".delete");
//  for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;;
//         par.remove();
//     })
//  }