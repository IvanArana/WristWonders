import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import '../css/Admin.css';

const ProductosAD = () => {
  return (
    <div className="container-lo">
      <Sidebar />

      <div id="content" className="p-4 p-md-5 pt-5">
        <h2 className="mb-4" style={{ color: '#2e4b90' }}>
          Productos
        </h2>
        <button className="btn btn-warning btn-sm" type="button" style={{ backgroundColor: '#2e4b90', color:'#eee', borderRadius:'#2e4b90' }}>Agregar producto</button>

        <div className="card card-body mt-3">
          <div className="d-flex align-items-center">
            <div className="mr-3">
              <img
                src="https://scontent.fisj1-1.fna.fbcdn.net/v/t39.30808-6/351325960_617122323716457_1602048674086500203_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=aDyitYiGq84AX9VSmj4&_nc_ht=scontent.fisj1-1.fna&oh=00_AfAw6gMILloUtcml4i8BcBsOEiWy7Ok9Efuyk0aZKljRZg&oe=6480EE26"
                width="150"
                height="150"
                alt=""
              />
            </div>
            <div className="flex-grow-1">
              <h5>AQ-230GA-9</h5>
              <div className="d-flex flex-row">
             
                <span>Hora dual</span>
              </div>
              
              <p className="text-justify text-truncate para mb-0">
                HOLA ESTE ES EL RELOJ 
              </p>
              <h4 className="mr-1">$5,599.00</h4>
            </div>
            <div className="ml-auto text-center">
            
              <div className="d-flex flex-column mt-4">
                <button className="btn btn-warning btn-sm" type="button">
                  Editar
                </button>
                <button className="btn btn-danger btn-sm mt-2" type="button">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-body mt-3">
          <div className="d-flex align-items-center">
            <div className="mr-3">
              <img
                src="https://scontent.fisj1-1.fna.fbcdn.net/v/t39.30808-6/351325960_617122323716457_1602048674086500203_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=aDyitYiGq84AX9VSmj4&_nc_ht=scontent.fisj1-1.fna&oh=00_AfAw6gMILloUtcml4i8BcBsOEiWy7Ok9Efuyk0aZKljRZg&oe=6480EE26"
                width="150"
                height="150"
                alt=""
              />
            </div>
            <div className="flex-grow-1">
              <h5>AQ-230GA-9</h5>
              <div className="d-flex flex-row">
             
                <span>Hora dual</span>
              </div>
              
              <p className="text-justify text-truncate para mb-0">
                HOLA ESTE ES EL RELOJ 
              </p>
              <h4 className="mr-1">$5,599.00</h4>
            </div>
            <div className="ml-auto text-center">
            
              <div className="d-flex flex-column mt-4">
                <button className="btn btn-warning btn-sm" type="button">
                  Editar
                </button>
                <button className="btn btn-danger btn-sm mt-2" type="button">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosAD;
