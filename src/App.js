import './App.css';
import React from 'react';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductLine from './components/ProductLine';
import Footer from './components/Footer';
import Page404 from './components/Page404';
import AllProducts from './components/AllProducts';
import NewProductPage from './components/NewProductPage';
import LoginPage from './components/Login';

import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Container maxWidth="xl">
              <ProductLine title="Star Wars" category= "starwars"/>
              <ProductLine title="Consolas" category= "consolas"/>
              <ProductLine title="Diversos" category= "diversos"/>
            </Container>
          </>
        }/>
        <Route path='/todos-los-productos' element={<AllProducts />}/>
        <Route path='/agregar-Producto' element={<NewProductPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='*' element={<Page404 />}/>
      </Routes>



      <Footer />
    </div>
  );
}

export default App;
