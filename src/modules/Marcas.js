import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import '../css/Admin.css';

const Marcas = () => {
  const [nombre, setnombre] = useState('');
  const [Marcas, setMarcas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [marcaSeleccionado, setmarcaSeleccionado] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const nuevaMarca = {
      id: Marcas.length + 1,
      tipo: nombre,
    };

    setMarcas([...Marcas, nuevaMarca]);
    setnombre('');
  };

  const handleEditarmarca = (marca) => {
    setModalOpen(true);
    setmarcaSeleccionado(marca);
  };

  const handleCerrarModal = () => {
    setModalOpen(false);
    setmarcaSeleccionado({});
  };

  return (
    <div className="container-lo">
      <Sidebar />

      <div id="content" className="p-4 p-md-5 pt-5">
        <h2 className="mb-4" style={{ color: '#2e4b90' }}>
          Marcas
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="card card-body mt-3">
            <div className="d-flex align-items-center">
              <div className="mr-3"></div>
              <div className="flex-grow-1">
                <h4>Agrega una Nueva marca</h4>
                <div className="d-flex flex-row"></div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setnombre(e.target.value)}
                  />
                </div>
                <h4>Logo</h4>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setnombre(e.target.value)}
                  />
                </div>
                <div className="ml-auto text-center">
                    <div className="d-flex flex-column mt-4">
                    <button
                        className="btn btn-light"
                        style={{ color: '#FFFFFF', backgroundColor: '#2e4b90' }}
                    >
                        Agregar
                    </button>
                    </div>
                </div>
              </div>
              
            </div>
          </div>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tipos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Marcas.map((marca) => (
              <tr key={marca.id}>
                <td>{marca.id}</td>
                <td>{marca.tipo}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    type="button"
                    onClick={() => handleEditarmarca(marca)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm ml-2"
                    type="button"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {modalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Editar Marcas</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="modal-nombre">nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="modal-nombre"
                    value={marcaSeleccionado.tipo}
                    onChange={(e) =>
                      setmarcaSeleccionado({
                        ...marcaSeleccionado,
                        tipo: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="modal-nombre">Editar logo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="modal-nombre"
                    value={marcaSeleccionado.tipo}
                    onChange={(e) =>
                      setmarcaSeleccionado({
                        ...marcaSeleccionado,
                        tipo: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="modal-buttons">
                  <button
                    className="btn btn-light"
                    onClick={handleCerrarModal}
                  >
                    Cancelar
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      // Guardar los cambios 
                      handleCerrarModal();
                    }}
                  >
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marcas;
