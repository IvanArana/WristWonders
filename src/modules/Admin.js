import '../css/Admin.css';
import React from 'react';
import { FaClock, FaUser } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';



const Admin = () => {
  return (
    <div className="container-lo">
      
      <Sidebar />

      <div id="content" className="p-4 p-md-5 pt-5">
        <h2 className="mb-4" style={{ color: '#2e4b90' }}>Dashboard</h2>

        <div className="row">
          <div className="col-md-6">
            <button className="card mb-3" style={{ backgroundColor: '#3F69C8', width: '97%', height: '200px', left:'20px' }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <FaClock size={48} />
                <h5 className="card-title mt-3">Productos</h5>
              </div>
            </button>
          </div>
          <div className="col-md-6">
            <button className="card mb-3" style={{ backgroundColor: '#F2EC50', width: '97%', height: '200px', left:'45px' }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Categorías</h5>
              </div>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <button  className="card mb-3" style={{ backgroundColor: '#8C3FC8', width: '97%', height: '200px', left:'20px' }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h1 className="card-title">Admins</h1>
              </div> 
            
            </button>
          </div>
          <div className="col-md-6">
            <button className="card mb-3" style={{ backgroundColor: '#50F260', width: '97%', height: '200px', left:'45px' }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <FaUser size={48} />
                <h5 className="card-title mt-3">Usuarios</h5>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;