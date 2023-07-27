import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import '../css/Admin.css';

const ProductosAD = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
    // Realizar la solicitud GET al endpoint para obtener la lista de productos
        axios.get('http://localhost:3001/productos')
            .then((response) => {
                setProductos(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDelete = (id, nombreProducto) => {
    // Mostrar un alert de confirmación antes de eliminar el producto
        const confirmDelete = window.confirm(`¿Estás seguro de eliminar el producto "${nombreProducto}"?`);

        if (confirmDelete) {
            // Realizar la solicitud DELETE al endpoint para eliminar el producto
            axios.delete(`http://localhost:3001/productos/${id}`)
                .then((response) => {
                    alert('Producto eliminado con éxito.');
                    // Recargar la lista de productos después de eliminar uno
                    axios.get('http://localhost:3001/productos')
                        .then((response) => {
                            setProductos(response.data);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((error) => {
                    console.log(error);
                    alert('Error al eliminar el producto. Por favor, inténtalo de nuevo.');
                });
        }
    };

    return (
        <div className="container-lo">
            <Sidebar />

            <div id="content" className="p-4 p-md-5 pt-5">

                <h2 className="mb-4" style={{ color: '#2e4b90' }}>
          Productos
                    <Link to="/AgregarProductos" className="btn btn-light" style={{ color: '#FFFFFF', backgroundColor: '#2e4b90' }}>
            Agregar Productos
                    </Link>
                </h2>

                {productos.map((producto) => (
                    <div key={producto.id} className="card card-body mt-3">
                        <div className="d-flex align-items-center">
                            <div className="mr-3">
                                <img src={producto.imagen} width="150" height="150" alt="" />
                            </div>
                            <div className="flex-grow-1">
                                <h5>{producto.nombre_producto}</h5>
                                <div className="d-flex flex-row">
                                    <span>{producto.nombre_tipo}</span>
                                </div>
                                <h4 className="mr-1">${producto.precio}.00</h4>
                            </div>
                            <div className="ml-auto text-center">
                                <div className="d-flex flex-column mt-4">
                                    {/* Modificamos el enlace para pasar el ID del producto */}
                                    <Link to={`/EditarProducto/${producto.idproducto}`} className="btn btn-warning btn-sm">
                    Editar
                                    </Link>
                                    <button
                                        className="btn btn-danger btn-sm mt-2"
                                        type="button"
                                        onClick={() => handleDelete(producto.idproducto, producto.nombre_producto)}
                                    >
                    Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ProductosAD;
