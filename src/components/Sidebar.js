import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../css/Admin.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-ho">
        <img src={logo} alt="Logo" width="200" height="120" className="d-inline-block align-top" />
        </div>

      <ul className="menu">
        <li>
          <Link to="/Admin" className="active">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/ProductosAD">Productos</Link>
        </li>
        <li>
          <Link to="/CategoriasAD">Categorías</Link>
        </li>
        <li>
          <a href="#">Usuarios</a>
        </li>
      </ul>
      <div className="logout">
        <Link to="/">Cerrar Sesión</Link>
      </div>
    </div>
  );
};

export default Sidebar;