// Fetch API PROMISES

const url = "https://jsonplaceholder.typicode.com/users"

const  consultarAPI =  () => {
    fetch(url)//promise es un valor que esta disponible ahora y en el futuro
        .then( data => data.json())
        .then( data => {
            data.forEach( comentario => {
                console.log(comentario)
            })

              const tabla = document.createElement('table');
              const encabezado = tabla.createTHead();
              const filaEncabezado = encabezado.insertRow();
              
              const celdaNombre = filaEncabezado.insertCell(0);
              const celdaEmail = filaEncabezado.insertCell(1);
              
              celdaNombre.textContent = 'Nombre';
              celdaEmail.textContent = 'Email';
              
              const cuerpoTabla = tabla.createTBody();
  
              data.forEach(comentario => {
                  const fila = cuerpoTabla.insertRow();
                  const celdaNombre = fila.insertCell(0);
                  const celdaEmail = fila.insertCell(1);
                  celdaNombre.textContent = comentario.name; // 
                  celdaEmail.textContent = comentario.email;
              });
  
              document.body.appendChild(tabla);

        }).catch( error => console.log(error))
}

consultarAPI();

