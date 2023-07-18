import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import '../css/Admin.css';

const CategoriasAD = () => {
  return (
    <div className="container-lo">
      <Sidebar />

      <div id="content" className="p-4 p-md-5 pt-5">
        <h2 className="mb-4" style={{ color: '#2e4b90' }}>
          Categorias
        </h2>

        <div className="d-flex justify-content-between">
          <div className="card" style={{ width: '18rem', marginRight: '10px' }}>
            <div className="card-body d-flex flex-column align-items-center">
              <h1 className="card-title">Tipos de Reloj</h1>
              <div style={{ marginTop: '30%' }}>
                <Link to="/TipoReloj" className="btn btn-primary btn-sm" type="button">
                  Detalles
                </Link>
              </div>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', marginRight: '10px' }}>
            <div className="card-body d-flex flex-column align-items-center">
              <h1 className="card-title">Materiales</h1>
              <div style={{ marginTop: 'auto' }}>
                <Link to="/Materiales" className="btn btn-primary btn-sm" type="button">
                  Detalles
                </Link>
              </div>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body d-flex flex-column align-items-center">
              <h1 className="card-title">Marcas</h1>
              <div style={{ marginTop: 'auto' }}>
                <Link  to="/Marcas" className="btn btn-primary btn-sm" type="button">
                  Detalles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriasAD;