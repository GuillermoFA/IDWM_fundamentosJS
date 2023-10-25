// manipular elementos HTML con JS

const heading = document.querySelector('.heading')
heading.textContent = 'Un Nuevo Heading Desde JS'
console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'rickyurvina'


const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach( enlace => enlace.textContent = 'Nuevo Enlace')
