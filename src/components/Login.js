import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { BsPersonFill  } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';




 
function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div  className="container" >
      <nav   className="navbar navbar-expand-lg navbar-secondary bg-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Login">
          <img src="https://drive.google.com/uc?export=view&id=1sQmsbYHZ79oB-gFCqrRDRmbxN3CAkQtp" alt="Logo" width="140" height="90" className="d-inline-block align-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto" >
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categorias">Categorías</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre-nosotros">Sobre nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
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
            <li class="bi bi-person-circle">
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

    <section className="vh-100" style={{ backgroundColor: 'white'}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div  style={{ borderRadius: '1rem', backgroundColor:'#3F69C8' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  
                  <img src="https://scontent.fisj1-1.fna.fbcdn.net/v/t39.30808-6/351325960_617122323716457_1602048674086500203_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=aDyitYiGq84AX9VSmj4&_nc_ht=scontent.fisj1-1.fna&oh=00_AfAw6gMILloUtcml4i8BcBsOEiWy7Ok9Efuyk0aZKljRZg&oe=6480EE26" alt="login form"
                    className="w-100 vh-100"
                    style={{ borderRadius: '1rem 0 0 1rem' }} width="1000" height="500" />
                    
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span class="letras" style={{ color:'white' }} className="h1 fw-bold mb-0">Inicio de Sesion</span>
                      </div>

                      <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example17" style={{ color:'white' }}>
                          Correo
                        </label>
                        <input type="email"  className="form-control form-control-lg" />
                        
                      </div>

                      <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example27" style={{ color:'white' }}>
                          Contraseña
                        </label>
                        <input type="password" className="form-control form-control-lg" />
                        
                      </div>

                      <div className="pt-1 mb-4">
                      <Link to="/admin" class="btn btn-light">Iniciar sesión</Link>
                      </div>
                     
                      <p className="mb-5 pb-lg-2" style={{ color: '#FEFEFE' }}>
                      ¿No tienes cuenta? <a href="/Registro" style={{ color: '#FEFEFE' }}>Registrate</a>
                      </p>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    </div>
    
  );
}

export default Login;
