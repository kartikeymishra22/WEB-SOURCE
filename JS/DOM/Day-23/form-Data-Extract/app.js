let form = document.querySelector('form');

form.addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the default form submission behavior
    console.dir(form);

    // let user = document.querySelector('#user');
    // let pass = document.querySelector('#pass');

    let user = this.elements[0];
    let pass = this.elements[1];

    console.log("Username: " , user.value);
    console.log("Password: " , pass.value);

    alert(`Username: ${user.value}\nPassword: ${pass.value}\n is stored succesfully.` );
})