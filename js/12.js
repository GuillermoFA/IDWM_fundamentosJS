// Funciones - Function Declaration
// sumar(10, 40);

// function sumar(numero = 50, numero3 = 50, numero2 = 20) {
//   console.log(numero + numero2 + numero3);
// }

//  sumar(2, 3)
// sumar();
//  sumar()

function sumar(numero = 0, numero2 = 0) {
  result = numero + numero2;
  return {
    resultado: numero + numero2,
    mensaje: "Hola Mundo",
  };
}

const {resultado, mensaje} = sumar(20, 30)

console.log(resultado)
console.log(mensaje)
// console.log(result)
