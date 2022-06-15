const colors = ["yellow","red","blue", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    //da un numero random entra 0-3
    const randomNumber = darNumeroRandom();
    console.log ("cambio");
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}); 
function darNumeroRandom (){
    return Math.floor(Math.random() * colors.length);
}