import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { BsPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

function Register() {
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del registro al servidor
  };

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
      <section className="vh-100" style={{ backgroundColor: 'white' }}>
        <div className="container py-5 h-100 d-flex justify-content-center align-items-center">
          <div className="card" style={{ maxWidth: '90%', backgroundColor: '#D9D9D9' }}>
            <div className="card-body p-4 p-lg-5 text-black">
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <span className="letras-r" style={{ color: '#3F69C8' }}>
                      Registro
                    </span>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">
                      Apellido
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Registrarse
                  </button>
                </div>
                <p className="mb-5 pb-lg-2" style={{ color: '#3F69C8' }}>
                      ¿No tienes cuenta? <a href="/login" style={{ color: '#3F69C8' }}>Inicia sesion </a>
                      </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
