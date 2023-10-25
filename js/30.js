// Fetch API  - Async Await

const url = "https://jsonplaceholder.typicode.com/users"

const consultarAPI = async () => {
    const respuesta = await fetch(url)//await previene que se ejecutre la sig linea bloqueando el codigo.
    console.log(respuesta)
   
    const resultado = await respuesta.json()
    const listaUsuarios = document.getElementById('lista-usuarios');
        
    resultado.forEach(usuario => {
        const itemLista = document.createElement('li');
        itemLista.textContent = `Nombre: ${usuario.name}, Email: ${usuario.email}`;
        listaUsuarios.appendChild(itemLista);
    });
    console.log(resultado)
}
consultarAPI();