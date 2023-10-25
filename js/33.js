// Promesas

const url = "http://localhost:3000/users";

const consultarAPI = async () => {
  const respuesta = await fetch(url); //await previene que se ejecutre la sig linea bloqueando el codigo.

  return new Promise((resolve, reject) => {
    if (respuesta.status === 200) {
      resolve(respuesta.json());
    } else {
      reject("Error en la API");
    }
  });
};

consultarAPI();

consultarAPI()
  .then((resultado) => {
    console.table(resultado);
  })
  .catch((error) => console.log(error));


  async function  fetching(){
    try{
        const datos = await consultarAPI();
        console.table(datos);
    }catch(error){
        console.log(error)
    }
  }

  fetching();
