import './NewProductPage.css'
import React, { useState } from 'react';
import {Container, TextField, Button } from '@mui/material/';
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../../services/productsService';

const NewProductPage = () => {
  const [img, setImg] = useState("")
  const [category, setCategory] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "imgUrl: ",img, "\n",
      "category: ",category, "\n",
      "name: ",name, "\n",
      "price: ",price, "\n",
      "description: ",description, "\n",
      );

      const newProduct = {
        img,
        category,
        name,
        price,
        description
      }

      createProduct(newProduct)
      navigate("/todos-los-productos")
  }

  return(
    <div className='loginPage'>
      <Container maxWidth="md">
        <form onSubmit={HandleSubmit}>
          <h2>Agregar Nuevo Producto</h2>
          <TextField 
            id="url"
            label="URL de imagen"
            variant="outlined" 
            fullWidth
            margin='normal'
            value={img}
            onChange={(e) => {
              setImg(e.target.value)}}
          />

          <TextField 
            id="category"
            label="Categoria"
            variant="outlined" 
            fullWidth
            margin='normal'
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)}}
            />

          <TextField 
            id="name"
            label="Nombre del producto"
            variant="outlined" 
            fullWidth
            margin='normal'
            value={name}
            onChange={(e) => {
              setName(e.target.value)}}
            />

          <TextField 
            id="price"
            label="Precio del producto"
            variant="outlined" 
            fullWidth
            margin='normal'
            value={price}
            onChange={(e) => {
              setPrice(e.target.value)}}
            />

          <TextField 
            id="description"
            label="Descripcion del producto"
            variant="outlined" 
            fullWidth
            margin='normal'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)}}
            />

            <Button variant="contained" type='submit'>Entrar</Button>
        </form>
      </Container>
    </div>
  )
}

export default NewProductPage