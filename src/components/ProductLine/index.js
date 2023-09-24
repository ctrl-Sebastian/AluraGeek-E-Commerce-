import './ProductLine.css'
import arrow from '../../imgs/arrow.svg'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { productsList } from "../../services/productsService"
import Product from '../Product'

const ProductLine = (props) =>{
  const [products, setProducts] = useState([])

  useEffect(() => {
    productsList('/products', setProducts)
  }, [])

  return(
    <section>
      <div className='productLine-top'>
        <h1>{props.title}</h1>
        <Link to="/todos-los-productos" style={{textDecoration: 'none'}}><p>Ver todos<img src={arrow} alt='arrow'></img></p></Link>
      </div>
      <div className='productLine'>
      {
        products
        .filter((product) => product.category === props.category).slice(0,5)
        .map((product) => 
        <Product 
          key={product.id} 
          img={product.img} 
          name={product.name} 
          price={product.price}
        />)
      }
      </div>
    </section>
  )
}

export default ProductLine