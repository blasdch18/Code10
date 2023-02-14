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

// selector  de varios elementos:
const parrafos = document.getElementsByTagName('p');
console.log(parrafos);

// parrafos.forEach(p) => {
//    console.log(p);
// }

const array_parrafos = document.querySelectorAll('p');
console.log(array_parrafos);
array_parrafos.forEach((p) => {
    //p.classList.add("big");
    //p.innerText = "blas";
     //console.log(p.id);
    p.onclick = function () {
        p.innerText = "Blas";
        p.classList = "big" ;
    };
});


const nombre = document.getElementById("input_name");

nombre.addEventListener("keyup", function() {
    const text = nombre.value ;
    array_parrafos.forEach((p) => {
        p.innerText = text;
    });
})