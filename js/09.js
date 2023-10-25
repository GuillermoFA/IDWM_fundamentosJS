// Operaciones en los arreglos
// console.table(tecnologias);

// Añadir elementos al array
// tecnologias.push('GraphQL') // Añade al final del array
// tecnologias.unshift('GraphQL2') // Añade al inicio del array

//  const nuevoArreglo = [...tecnologias, 'GraphQL', 'VueJs']

// const nuevoArreglo = ['GraphQL3', ...tecnologias,'Angular']

//  Eliminar elementos del array
// tecnologias.pop() // Elimina del final
// tecnologias.shift() // Elimina del inicio
// tecnologias.splice(0, 2) // Elimina de una posición en especifica
// console.table(tecnologias);

// const nuevoArray = tecnologias.filter( function(tech) {
//     console.log(tech)
// })
// console.table(nuevoArray);

// // Reemplazar del array
// tecnologias[0] = 'GraphQL'
// console.table(tecnologias);
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

const nuevoArray = tecnologias.map( function(tech) {
    if(tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

console.table(nuevoArray)

// console.table(tecnologias)
// console.table(nuevoArreglo)