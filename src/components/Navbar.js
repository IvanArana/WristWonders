import React from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../img/logo.png';
import { animateScroll } from 'react-scroll';

function Navbar() {
  
  const handleScrollToFooter = () => {
    animateScroll.scrollToBottom({ duration: 500, smooth: 'easeInOutQuart' });
  };

  

  return (
    <nav className="navbar navbar-expand-md navbar-secondary custom-nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="/Login">
          <img
            src={logo}
            alt="Logo"
            width="160"
            height="90"
            className="d-inline-block align-top"
          />
        </a>
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
              <a className="nav-link" href="/" style={{ color: '#3F69C8' }}>
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categorias" style={{ color: '#3F69C8' }}>
                Categorías
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sobre-nosotros" style={{ color: '#3F69C8' }}>
                Sobre nosotros
              </a>
            </li>
            <li className="nav-item">
            <button className="nav-link btn-link" style={{ color: '#3F69C8' }} onClick={handleScrollToFooter}>
              Contacto
            </button>

            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/card">
                <button className="btn btn-primary">
                  <FaShoppingCart />
                </button>
              </a>
            </li>
            <li className="bi bi-person-circle">
              <a className="nav-link" href="/usuario">
                <button className="btn btn-primary">
                  <BsPersonFill />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
