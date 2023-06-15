import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './modules/Login'; 
import Admin from './modules/Admin';
import Registro from './modules/Registro'; 
import Card from './components/Card'; 
import User from './modules/User'; 
import ProductosAD from './modules/ProductosAD'; 
import CategoriasAD from './modules/CategoriasAD'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} /> 
        <Route path="/registro" element={<Registro />} /> 
        <Route path="/Admin" element={<Admin />} /> 
        <Route path="/principal-user" element={<User />} /> 
        <Route path="/carrito" element={<Card />} /> 
        <Route path="/ProductosAD" element={<ProductosAD />} /> 
        <Route path="/CategoriasAD" element={<CategoriasAD />} /> 
      </Routes>
    </Router>
  );
}

export default App;
