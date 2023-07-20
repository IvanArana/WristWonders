import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function DetallesProductos() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/productos/${id}`)
            .then((response) => response.json())
            .then((data) => setProducto(data))
            .catch((error) => console.log(error));
    }, [id]);

    if (!producto) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <Navbar />
            <div className="producto-details">
                <img src={producto.imagen} alt={producto.nombre_producto} />
                <p>Tipo: {producto.nombre_tipo}</p>
                <p>Marca: {producto.nombre_marca}</p>
                <p>Material: {producto.nombre_material}</p>
                <p>Precio: ${producto.precio}.00</p>
                <button>Añadir al carrito</button>
            </div>
            <Footer />
        </div>
    );
}

export default DetallesProductos;