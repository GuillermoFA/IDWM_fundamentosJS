// Ternarios
const autenticado = true
const autenticado2 = true;

if(autenticado) {
    console.log('Si esta autenticado')
    if(autenticado2){
        console.log('Si esta autenticado 2')
    }
}else{
    console.log('No esta autenticado')
}

autenticado ? 
    console.log('usuario autenticado') : 
    console.log('No autenticado, dirigir hacia login')

// Doble ternario
// const saldo = 600
// const pagar = 800
// const tarjeta = false

// saldo > pagar ? 
//     console.log('Puedes pagar con saldo') : 
//     tarjeta ? 
//         console.log('Puedes pagar con tarjeta') : 
//         console.log('No no puedes pagar')



