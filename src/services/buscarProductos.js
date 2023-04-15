export async function consultarProductos(){

  const URL = "http://localhost:8080/tienda/api/";

  const PETICION = {
    method:"GET"
  }

  let respuesta = await fetch(URL, PETICION)
  let productos = respuesta.json()
  return productos

}