import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import '../css/Admin.css';
import { useParams } from 'react-router-dom';

const EditarProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({
        nombre_producto: '',
        tipo_reloj: '',
        marca: '',
        material: '',
        peso: '',
        res_agua: '',
        pila_mov: '',
        imagen: '',
        precio: '',
        cantidad: '',
    });

    useEffect(() => {
        // Realizar la solicitud GET al endpoint para obtener la información del producto
        axios
            .get(`http://localhost:3001/productos/${id}`)
            .then((response) => {
                setProducto(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert('Error al cargar los datos del producto.');
            });
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProducto({
            ...producto,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Realizar la solicitud PUT al endpoint para actualizar el producto
        axios
            .put(`http://localhost:3001/productos/${id}`, producto)
            .then((response) => {
                alert('Producto modificado con éxito.');
                // Redireccionar a la vista de ProductosAD
                window.location.href = '/ProductosAD';
            })
            .catch((error) => {
                console.log(error);
                alert('Error al modificar el producto. Por favor, inténtalo de nuevo.');
            });
    };

    return (
        <div className="container-lo">
            <Sidebar />

            <div id="content" className="p-4 p-md-5 pt-5">
                <h2 className="mb-4" style={{ color: '#2e4b90' }}>
                    Editar Producto
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="nombreProducto">Nombre del Producto:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombreProducto"
                                name="nombre_producto"
                                value={producto.nombre_producto}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="tipoReloj">Tipo de Reloj:</label>
                            <select
                                className="form-control"
                                id="tipoReloj"
                                name="tipo_reloj"
                                value={producto.tipo_reloj}
                                onChange={handleInputChange}
                            >
                                <option value="">Seleccione un tipo de reloj</option>
                                <option value="1">Análogico</option>
                                <option value="2">Digital</option>
                                <option value="3">Hora Dual</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="marca">Material:</label>
                            <select
                                className="form-control"
                                id="marca"
                                name="marca"
                                value={producto.marca}
                                onChange={handleInputChange}
                            >
                                <option value="">Seleccione un marca</option>
                                <option value="1">Casio</option>
                                <option value="2">Timex</option>
                                <option value="3">Rolex</option>
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="peso">Peso:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="peso"
                                name="peso"
                                value={producto.peso}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="material">Material:</label>
                            <select
                                className="form-control"
                                id="material"
                                name="material"
                                value={producto.material}
                                onChange={handleInputChange}
                            >
                                <option value="">Seleccione un material</option>
                                <option value="1">Acero</option>
                                <option value="2">Resina</option>
                                <option value="3">Combinado</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="urlImagen">URL de la Imagen:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="urlImagen"
                            name="imagen"
                            value={producto.imagen}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="resistenciaAgua">Resistencia al Agua:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="resistenciaAgua"
                            name="res_agua"
                            value={producto.res_agua}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duracionPilas">Duración de las Pilas:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="duracionPilas"
                            name="pila_mov"
                            value={producto.pila_mov}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="precio">Precio $:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="precio"
                            name="precio"
                            value={producto.precio}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cantidad">Cantidad:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="cantidad"
                            name="cantidad"
                            value={producto.cantidad}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ backgroundColor: '#2e4b90' }}
                    >
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditarProducto;
