import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../css/Admin.css';

const Materiales = () => {
    const [precio, setPrecio] = useState('');
    const [materiales, setMateriales] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [materialSeleccionado, setMaterialSeleccionado] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const nuevoMaterial = {
            id: materiales.length + 1,
            tipo: precio,
        };

        setMateriales([...materiales, nuevoMaterial]);
        setPrecio('');
    };

    const handleEditarMaterial = (material) => {
        setModalOpen(true);
        setMaterialSeleccionado(material);
    };

    const handleCerrarModal = () => {
        setModalOpen(false);
        setMaterialSeleccionado({});
    };

    return (
        <div className="container-lo">
            <Sidebar />

            <div id="content" className="p-4 p-md-5 pt-5">
                <h2 className="mb-4" style={{ color: '#2e4b90' }}>
          Materiales
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="card card-body mt-3">
                        <div className="d-flex align-items-center">
                            <div className="mr-3"></div>
                            <div className="flex-grow-1">
                                <h4>Agrega un Nuevo Material</h4>
                                <div className="d-flex flex-row"></div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="precio"
                                        value={precio}
                                        onChange={(e) => setPrecio(e.target.value)}
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
                        {materiales.map((material) => (
                            <tr key={material.id}>
                                <td>{material.id}</td>
                                <td>{material.tipo}</td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm"
                                        type="button"
                                        onClick={() => handleEditarMaterial(material)}
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
                            <h3>Editar Materiales</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="modal-precio">Precio:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="modal-precio"
                                        value={materialSeleccionado.tipo}
                                        onChange={(e) =>
                                            setMaterialSeleccionado({
                                                ...materialSeleccionado,
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

export default Materiales;
