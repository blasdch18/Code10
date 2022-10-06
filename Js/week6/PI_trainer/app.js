//DOM:
//Objeto que representa al modelo del documento 
// Escribir un texto dentro del elemento :
document.getElementById('div_container').innerText = "Hola a todos";
// Darle estilos al elemento:
// document.getElementById('div_container').style.fontSize = "40px"

function test() {
    document.getElementById("div_container").classList.add("big");
}
    
function remove () {
    document.getElementById("div_container").classList.remove("big");
}