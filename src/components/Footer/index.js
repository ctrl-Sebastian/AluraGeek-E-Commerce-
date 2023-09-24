import './Footer.css'
import logo from '../../imgs/logo.svg'
import Form from '../Form'

const Footer = () =>{
  return(
    <div>
      <div className='footer'>
        <img src={logo} alt='logo'></img>
        <div className='anchors'>
          <h4>Quienes Somos</h4>
          <h4>Politica de privacidad</h4>
          <h4>Programa de fidelidad</h4>
          <h4>Nuestras tiendas</h4>
          <h4>Quiero ser franquiciado</h4>
          <h4>Anuncie aqui</h4>
        </div>
        <Form />
      </div>
      <div className='end'>
        <h4>Desarrollado por Sebastian Marrera</h4>
        <h4>2023</h4>
      </div>
    </div>
  )
}

export default Footer;