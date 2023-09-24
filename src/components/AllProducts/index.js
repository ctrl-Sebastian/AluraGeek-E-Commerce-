import './AllProducts.css'
import React, { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material/';
import { productsList } from '../../services/productsService';
import Product from '../Product';
import { Link } from 'react-router-dom'

const AllProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    productsList('/products', setProducts)
  }, [])

  return(
      <div className='products'>
        <Container maxWidth="lg">
          <div className='allProducts-top'>
            <h1>Todos los productos</h1>
            <Link to="/agregar-Producto">
              <Button variant="contained">Agregar Producto</Button>
            </Link>
          </div>
          <div className='products-allProducts'>
          {
            products
            .map((product) => 
            <Product 
              key={product.id} 
              img={product.img} 
              name={product.name} 
              price={product.price}
            />)
          }
          </div>
        </Container>
      </div>
  )
}

export default AllProducts;