import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './modules/Login'; 
import Admin from './modules/Admin';
import Registro from './modules/Registro'; 
import Card from './components/Card'; 
import User from './modules/User';
import ProductosAD from './modules/ProductosAD'; 
import CategoriasAD from './modules/CategoriasAD'; 
import CategoriaUser from './modules/CategoriaUser';
import ProductosTipo from './modules/ProductosTipo';
import ProductosMaterial from './modules/ProductosMaterial';
import ProductosMarca from './modules/ProductosMarca';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/registro" element={<Registro />} /> 
        <Route path="/Admin" element={<Admin />} /> 
        <Route path="/principal-user" element={<User />} /> 
        <Route path="/carrito" element={<Card />} /> 
        <Route path="/ProductosAD" element={<ProductosAD />} /> 
        <Route path="/CategoriasAD" element={<CategoriasAD />} /> 
        <Route path="/CategoriaUser" element={<CategoriaUser/>}/>
        <Route path="/ProductosTipo" element={<ProductosTipo/>}/>
        <Route path="/ProductosMaterial" element={<ProductosMaterial/>}/>
        <Route path="/ProductosMarca" element={<ProductosMarca/>}/>

      </Routes>
    </Router>
  );
}

export default App;
