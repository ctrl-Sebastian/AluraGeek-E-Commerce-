import './Header.css'
import React from 'react'
import logo from '../../imgs/logo.svg'
import {TextField, Button } from '@mui/material/';
import { Link, useLocation } from 'react-router-dom';



const Header = () =>{
  let location = useLocation();

  return(
    <div>
      <div className='top'>
        <Link to='/'>
          <img src={logo} alt='logo'></img>
        </Link>
        <TextField 
        id="buscar"
        label="¿Que deseas buscar?"
        variant="outlined" 
        margin='normal'
        />
        {
          location.pathname === "/" ? 
          <Link to='/login'><Button variant="contained">Login</Button></Link> 
          : location.pathname === "/agregar-Producto" ? 
          <Link to='/'><Button variant="contained">Menu Administrador</Button></Link> 
          :<></>
        }
      </div>
    </div>
  )
}

export default Header;