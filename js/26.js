// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()//preveiene la accion por default

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value
    
    if(nombre === '' || password === '') {
        console.log('Todos los campos son obligatorios')
        alert('Todos los campos son obligatorios')
    } else {
        console.log('Todo bien, enviando...')
        alert('Todo bien, enviando...')
    }
})