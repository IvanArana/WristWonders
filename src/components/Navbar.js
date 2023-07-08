// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';
import Image from '../img/logo.png';

function Navbar() {
  const handleScrollToFooter = () => {
    animateScroll.scrollToBottom({ duration: 500, smooth: 'easeInOutQuart' });
  };
  return (
    <nav className="navbar navbar-expand-md navbar-secondary custom-nav">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={Image}
            alt="Logo"
            className="d-inline-block align-top"
            width="160"
            height="90"
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
              <Link className="nav-link" to="/CategoriaUser" style={{ color: '#3F69C8' }}>
                Categorías
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre-nosotros" style={{ color: '#3F69C8' }}>
                Sobre nosotros
              </Link>
            </li>
            <li className="nav-item">
            <button className="nav-link btn-link" style={{ color: '#3F69C8' }} onClick={handleScrollToFooter}>
              Contacto
            </button>

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