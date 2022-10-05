import './App.css';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import CartProvider from './context/CartContext';


function App() {
  return (
    <>     
      <NavBar/>
      <CartProvider>

        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/about' element={<ItemDetailContainer/>}/>
        </Routes>

      </CartProvider>

    </>
  )
}

export default App
