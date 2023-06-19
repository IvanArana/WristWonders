import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; 
import Admin from './components/Admin';
import Registro from './components/Registro'; 
import Card from './components/Card'; 
import User from './components/User';
import ProductosAD from './components/ProductosAD'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} /> 
        <Route path="/registro" element={<Registro />} /> 
        <Route path="/" element={<Admin />} /> 
        <Route path="/principal-user" element={<User />} /> 
        <Route path="/carrito" element={<Card />} /> 
        <Route path="/ProductosAD" element={<ProductosAD />} /> 

      </Routes>
    </Router>
  );
}

export default App;
