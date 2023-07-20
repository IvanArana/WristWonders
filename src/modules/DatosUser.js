import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Usuario() {
    const [usuario, setUsuario] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [datosEditados, setDatosEditados] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        contraseña: '',
        direccion: '',
    });

    useEffect(() => {
        fetchUsuario();
    }, []);

    const fetchUsuario = async () => {
        try {
            const response = await axios.get('ruta-de-tu-endpoint-para-obtener-los-datos-del-usuario');
            if (editMode) {
                setUsuario(datosEditados);
            } else {
                setUsuario(response.data);
                setDatosEditados(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDatosEditados((prevDatos) => ({
            ...prevDatos,
            [name]: value,
        }));
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        setEditMode(false);
        //  lógica para guardar los datos editados en la base de datos
        fetchUsuario();
    };

    return (
        <div className="container">
            <Navbar />
            <br />
            <div className="usuario-tarjeta">
                <h2>Mis Datos</h2>
                {usuario ? (
                    <div>
                        <p>
                            <strong>Nombre:</strong>
                            {editMode ? (
                                <input
                                    type="text"
                                    name="nombre"
                                    value={datosEditados.nombre}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                usuario.nombre
                            )}
                        </p>
                        <p>
                            <strong>Apellido:</strong>
                            {editMode ? (
                                <input
                                    type="text"
                                    name="apellido"
                                    value={datosEditados.apellido}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                usuario.apellido
                            )}
                        </p>
                        <p>
                            <strong>Correo Electrónico:</strong>
                            {editMode ? (
                                <input
                                    type="email"
                                    name="correo"
                                    value={datosEditados.correo}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                usuario.correo
                            )}
                        </p>
                        <p>
                            <strong>Contraseña:</strong>
                            {editMode ? (
                                <input
                                    type="password"
                                    name="contraseña"
                                    value={datosEditados.contraseña}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                usuario.contraseña
                            )}
                        </p>
                        <p>
                            <strong>Dirección:</strong>
                            {editMode ? (
                                <input
                                    type="text"
                                    name="direccion"
                                    value={datosEditados.direccion}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                usuario.direccion
                            )}
                        </p>
                    </div>
                ) : (
                    <p>Cargando datos del usuario...</p>
                )}
                {editMode ? (
                    <button onClick={handleSaveClick}>Guardar</button>
                ) : (
                    <button onClick={handleEditClick}>Editar</button>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Usuario;
