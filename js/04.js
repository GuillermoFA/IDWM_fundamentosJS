// Objetos

// console.log(producto)
// console.table(producto)

// console.log( producto.nombre )
// console.log( producto.precio )
// console.log( producto.disponible )
// console.log( producto.cantidad )

// const product2={
//     name:"Monitor 20 pulgadas",
//     price:300,
// }

// let {name,price}=product2
// name="Monitor 2"
// console.log({name})
// product2.name="Monitor 3"
// console.log(product2)

const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
  cantidad: 50,
};

// Destructuring
let { nombre, precio, disponible, cantidad, propiedades } = producto;
// console.log(nombre)
// console.log(precio)
// console.log(disponible)
// cantidad= cantidad+10;
// console.log(cantidad)
// console.table(producto)

//  Object Literal Enhacement
const autenticado = false
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
     usuario,
};

// console.table(nuevoObjeto);

const { autenticado: autenticado2, usuario:usuario2 } = nuevoObjeto
console.log(autenticado2)
console.log(usuario2)
