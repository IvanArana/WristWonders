import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
import { BsPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

function Usuario() {
  // Datos de ejemplo de productos
  const productos = [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 10.99,
      imagen: 'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/L/LW/LWA/LWA-300H-7EV/assets/LWA-300H-7EV_Seq1.jpg.transform/main-visual-pc/image.jpg',
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: 19.99,
      imagen: 'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/L/LW/LWA/LWA-300H-7EV/assets/LWA-300H-7EV_Seq1.jpg.transform/main-visual-pc/image.jpg',
    },
    // Agrega más productos aquí...
  ];

  return (
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-secondary custom-nav"> 
          <div className="container-fluid">
            <Link className="navbar-brand" to="/Registro">
              <img
                src="https://drive.google.com/uc?export=view&id=1sQmsbYHZ79oB-gFCqrRDRmbxN3CAkQtp"
                alt="Logo"
                width="160"
                height="90"
                className="d-inline-block align-top"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" style={{ color: '#3F69C8' }}>
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categorias" style={{ color: '#3F69C8' }}>
                    Categorías
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sobre-nosotros" style={{ color: '#3F69C8' }}>
                    Sobre nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto" style={{ color: '#3F69C8' }}>
                    Contacto
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/card">
                    <button className="btn btn-primary">
                      <FaShoppingCart />
                    </button>
                  </Link>
                </li>
                <li className="bi bi-person-circle">
                  <Link className="nav-link" to="/usuario">
                    <button className="btn btn-primary">
                      <BsPersonFill />
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    
        <div className="usuario">
        <h1>Catálogo de Productos</h1>
        <div className="catalogo">
          {productos.map((producto) => (
            <div key={producto.id} className="producto">
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>Precio: ${producto.precio}</p>
              <button>Ver detalles</button>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
}

export default Usuario;

   
