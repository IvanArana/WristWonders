import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgregarProductos from './modules/AgregarProductos';
import Confirmacion from './components/Confirmacion';
import Materiales from './modules/Materiales';
import TipoReloj from './modules/TipoReloj';
import Marcas from './modules/Marcas';
import Login from './modules/Login';
import Admin from './modules/Admin';
import Registro from './modules/Registro';
import Carrito from './modules/Carrito';
import User from './modules/User';
import ProductosAD from './modules/ProductosAD';
import CategoriasAD from './modules/CategoriasAD';
import CategoriaUser from './modules/CategoriaUser';
import ProductosTipo from './modules/ProductosTipo';
import ProductosMaterial from './modules/ProductosMaterial';
import ProductosMarca from './modules/ProductosMarca';
import DetallesProductos from './modules/DetallesProductos';
import DatosUser from './modules/DatosUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/principal-user" element={<User />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/ProductosAD" element={<ProductosAD />} />
        <Route path="/CategoriasAD" element={<CategoriasAD />} />
        <Route path="/AgregarProductos" element={<AgregarProductos />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/CategoriaUser" element={<CategoriaUser />} />
        <Route path="/ProductosTipo" element={<ProductosTipo />} />
        <Route path="/ProductosMaterial" element={<ProductosMaterial />} />
        <Route path="/ProductosMarca" element={<ProductosMarca />} />
        <Route path="/Materiales" element={<Materiales />} />
        <Route path="/TipoReloj" element={<TipoReloj />} />
        <Route path="/Marcas" element={<Marcas />} />
        <Route path="/productos/:id" element={<DetallesProductos />} />
        <Route path="/DatosUser" element={<DatosUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;