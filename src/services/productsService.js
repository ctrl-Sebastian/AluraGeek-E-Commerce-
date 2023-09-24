import axios from "axios";
// GET
const api = axios.create({
  baseURL: "https://alurageek-service.onrender.com/"
})

export const productsList = async (url, setData) => {
  const respuesta = await api.get(url)
  setData(respuesta.data)
}

// POST
export const createProduct = (product) =>{
  fetch('https://alurageek-service.onrender.com/products', {
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
