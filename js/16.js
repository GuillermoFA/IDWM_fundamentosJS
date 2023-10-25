const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

// Filter
nuevoArray = tecnologias.filter( tech => tech !== 'React')
// console.table(nuevoArray)

// Comprobar si un elemento existe en el array
// const resultado = tecnologias.includes('CSS')

// Some - Devuelve si al menos uno cumple la condición
// const resultado = numeros.some( numero => numero > 20)

// Find - Devuelve el primer elemento que cumpla la condicion
// const resultado = numeros.find( numero => numero > 11)

// Every - Retorna true o false si todos cumplen la condición
// const resultado = numeros.every( numero => numero > 10)

// Reduce - Acumulando en el total
// const resultado = numeros.reduce( (total, numero) => numero + total, 0)
// console.log(resultado)

// Filter - Crea un nuevo array en base a una condición
// const resultado = tecnologias.filter( tech => tech === 'Node.js')
// const resultado = numeros.filter( numero => numero !== 10)
// tecnologias.forEach( (tech, index) => console.log(tech))

// Crear un nuevo array
const arrayMap = tecnologias.map( tech =>tech )

console.log(arrayMap)