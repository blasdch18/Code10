function aumentarNumber(numero, aumento) {

    numero += aumento;// 30
    numero -= aumento;// 10
    numero *= aumento;// 200
    numero /= numero;// 1
    console.log(numero);
}

aumentarNumber(10,20);

console.log("Funcion 2");
function aumentoDoble(numero, aumento) {
    numero **=aumento; //8
    numero %= aumento;
    console.log("AumentoDoble",numero);
}

aumentoDoble(2,3);//2
aumentoDoble(8,4);//0
aumentoDoble(12,2)//0

function operadorDeCambio(numero1, numero2) {
    numero1 <<= numero2;
    //numero1 = numero1 << numero2;
    console.log("operadorDeCambio", numero1);
}
operadorDeCambio(2,2);

function operadoresLogicos(numero1, numero2) {
    // cuando tenemos un operador logico que sea
    // > < >= <= == === || siempre se retorna un true o false
    console.log(">", numero1 > numero2); // true
    console.log("<", numero1 < numero2); // false
    console.log("==", numero1 == numero2); // false
    // === vs ==
    console.log("==", "1" == 1); // true
    console.log("===", "1" === 1); // false
    console.log(typeof 41.3); // number
    console.log(typeof "hola"); // string
    console.log(typeof [1, 2, 3]); // object
  }
  
  operadoresLogicos(100, 50);

  function validarComoIrAEstudiar(hora, dinero) {
    if (hora === "6:00 am") {
      // Me levante temprano. puedo tomar desayuno
      console.log("Tomo desayuno");
      if (dinero > 20) {
        console.log("Tomo colectivo");
      } else if (dinero > 10) {
        console.log("Tomo el corredor");
      } else {
        console.log("Tomo el chino");
      }
      console.log("Llego a estudiar");
    } else if (hora === "7:00 am") {
      console.log("NO Tomo desayuno");
      // Si tengo dinero
      if (dinero) {
        console.log("Tomo el corredor");
      }
      console.log("Llego a estudiar");
    } else {
      console.log("NO Tomo desayuno");
      console.log("Tomo colectivo");
      console.log("Llego a estudiar");
    }
  }
  
  // casi 1
  console.log("Caso 1");
  validarComoIrAEstudiar("6:00 am", 10);
  console.log("Caso 2");
  validarComoIrAEstudiar("6:00 am", 15);
  console.log("Caso 3");
  validarComoIrAEstudiar("8:00 am", 15);