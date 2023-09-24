import React, { useState } from 'react';
import {Container, TextField, Button } from '@mui/material/';
import {useNavigate } from 'react-router-dom'
import './Login.css'

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = useNavigate()
  
  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: "Deben ser al menos 3 caracteres",
    },
  })

  function ValidateEmail(email){
    if(email.length >= 3){
      return {
        name: { 
          error: false, 
          message: '',
        },
      }
    }else{
      return {name: {
        error: true, 
        message: 'Deben ser al menos 3 caracteres',
      },
    }
    }
  }

  function ValidatePassword(password){
    if(password.length >= 3){
      return {
        name: { 
          error: false, 
          message: '',
        },
      }
    }else{
      return {name: {
        error: true, 
        message: 'Deben ser al menos 3 caracteres',
      },
    }
    }
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "email: ",email, "\n",
      "password: ",password, "\n",
      );
      navigate("/")
      setIsLoggedIn(true)
  }

  return(
    <div className='loginPage'>
      <Container maxWidth="md">
        <form onSubmit={HandleSubmit}>
          <h2>Iniciar Sesion</h2>
          <TextField 
            id="email"
            label="Email"
            variant="outlined" 
            fullWidth
            margin='normal'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)}}
            onBlur={(e) => {
              setErrors(ValidateEmail(e.target.value));
            }}
            error = {errors.name.error}
            helperText={errors.name.error ? errors.name.message : ''}
          />
          
          <TextField 
            id="password"
            label="Password"
            variant="outlined" 
            fullWidth
            margin='normal'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)}}
            onBlur={(e) => {
              setErrors(ValidatePassword(e.target.value));
            }}
            error = {errors.name.error}
            helperText={errors.name.error ? errors.name.message : ''}
            />
            <Button variant="contained" type='submit'>Entrar</Button>
        </form>
      </Container>
    </div>
  )
}

export default LoginPage