// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  return (
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
  );
}

export default Navbar;
