import './Hero.css'
import React from 'react'
import logo from '../../imgs/logo.svg'
import {TextField, Button } from '@mui/material/';

const Hero = () =>{
  return(
    <div>
      <div className='hero'>
          <div className='text'>
            <h1>Febrero Promocional</h1>
            <h3>Productos seleccionados cn 33% de descuento</h3>
            <Button variant="contained" >Ver Consolas</Button>
          </div>
      </div>
    </div>
  )
}

export default Hero;