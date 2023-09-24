import axios from "axios";
// GET
const api = axios.create({
  baseURL: "http://localhost:3000"
})

export const productsList = async (url, setData) => {
  const respuesta = await api.get(url)
  setData(respuesta.data)
}

// POST
export const createProduct = (product) =>{
  fetch('http://localhost:3000/products', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(product)
  }).then(response => {
    if(response.ok){
      return response.body
    } else{
      throw new Error("No se pudo crear el produto")
    }
  })
}

export const productsService = {
  productsList,
  createProduct
}