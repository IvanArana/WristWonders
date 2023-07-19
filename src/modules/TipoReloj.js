import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import '../css/Admin.css';

const TipoReloj = () => {
    const [tipo, setTipo] = useState('');
    const [relojes, setRelojes] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [relojSeleccionado, setRelojSeleccionado] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const nuevoReloj = {
            id: relojes.length + 1,
            tipo,
        };

        setRelojes([...relojes, nuevoReloj]);
        setTipo('');
    };

    const handleEditarReloj = (reloj) => {
        setModalOpen(true);
        setRelojSeleccionado(reloj);
    };

    const handleEliminarReloj = (reloj) => {
        const nuevosRelojes = relojes.filter((item) => item.id !== reloj.id);
        setRelojes(nuevosRelojes);
    };

    const handleCerrarModal = () => {
        setModalOpen(false);
        setRelojSeleccionado({});
    };

    return (
        <div className="container-lo">
            <Sidebar />

            <div id="content" className="p-4 p-md-5 pt-5">
                <h2 className="mb-4" style={{ color: '#2e4b90' }}>
          Relojes
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="card card-body mt-3">
                        <div className="d-flex align-items-center">
                            <div className="mr-3"></div>
                            <div className="flex-grow-1">
                                <h4>Agrega un Nuevo Tipo de Reloj</h4>
                                <div className="d-flex flex-row"></div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="tipo"
                                        value={tipo}
                                        onChange={(e) => setTipo(e.target.value)}
                                    />
                                </div>
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
                        {relojes.map((reloj) => (
                            <tr key={reloj.id}>
                                <td>{reloj.id}</td>
                                <td>{reloj.tipo}</td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm"
                                        type="button"
                                        onClick={() => handleEditarReloj(reloj)}
                                    >
                    Editar
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm ml-2"
                                        type="button"
                                        onClick={() => handleEliminarReloj(reloj)}
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
                            <h3>Editar Tipo de Reloj</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="modal-tipo">Tipo:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="modal-tipo"
                                        value={relojSeleccionado.tipo}
                                        onChange={(e) =>
                                            setRelojSeleccionado({
                                                ...relojSeleccionado,
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

export default TipoReloj;
