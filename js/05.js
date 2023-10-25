// Objetos - Manipulación
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
// Object.freeze(producto)

//  - Freeze - No deja modificarlo, 
// congela un objeto, es decir: impide que se le agreguen nuevas propiedades; impide que se puedan eliminar las propiedades ya existentes
// no permite añadir ni eliminar

// - Modificar propiedades existentes, 
// permite añadir ni eliminar
//  sella un objeto, previniendo que puedan añadirse nuevas propiedades al mismo, y marcando todas las propiedades existentes como no-configurables
// Object.seal(producto) 
console.table(producto)

// Reescribir un valor
producto.nombre = "Monitor Curvo"

// // Si no existe, lo va a añadir
// producto.imagen = "imagen.jpg"

delete producto.disponible
console.table(producto);

// console.table(producto)