// Eventos del DOM - Inputs

const inputNombre = document.querySelector('.nombre')
// inputNombre.addEventListener('input', function(e) {
//     console.log(e.target.value)
//     // console.log(inputNombre.value)

// })
// inputNombre.addEventListener('keyup', function(e) {
//     console.log('keyup')
// })
// inputNombre.addEventListener('keydown', function(e) {
//     console.log('keydown')
// })


const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', funcionPassword)

function funcionPassword() {
    inputPassword.type = 'text'

    setTimeout(() => {
        inputPassword.type = 'password'
    }, 1000);
}