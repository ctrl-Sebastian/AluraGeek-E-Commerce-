import './Product.css'

const Product = (props) =>{
  const {img, name, price} = props

  return(
    <div className='product'>
      <img src={img} alt='Product'></img>
      <h3 style={{margin: 0}}>{name}</h3>
      <h4 style={{marginTop: 5}}>${price}</h4>
    </div>
  )
}

export default Product