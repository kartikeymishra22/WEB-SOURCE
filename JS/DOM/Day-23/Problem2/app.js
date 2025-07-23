let input = document.querySelector("input");

input.addEventListener("input", function(){
    this.value = this.value.replace(/[^a-zA-Z ]/g, '');
    let h2 = document.querySelector("h2");
    h2.textContent = this.value;
})