let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div.addEventListener("click", function(event){
    event.stopPropagation(); // Prevents the event from bubbling up to the parent elements
    console.log("Div clicked");
});

ul.addEventListener("click", function(event){
    event.stopPropagation(); // Prevents the event from bubbling up to the parent elements
    console.log("Ul clicked");
});

for( li of lis) {
    li.addEventListener("click", function(event){
    event.stopPropagation(); // Prevents the event from bubbling up to the parent elements
    console.log("Li clicked");
    });
}