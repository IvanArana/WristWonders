import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { BsPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

function DetallesProductos() {
    const [producto, setProducto] = useState({
        nombre: 'Producto de prueba',
        tipo: 'Tipo de prueba',
        marca: 'Marca de prueba',
        peso: 'Peso de prueba',
        material: 'Material de prueba',
        caracteristicas: 'Características de prueba',
        precio: 99.99,
        imagen: 'ruta-de-la-imagen.jpg'
    });
    // const [producto, setProducto] = useState(null);

    // // Aquí es para  obtener los detalles del producto seleccionado
    // useEffect(() => {
    //   // Lógica para obtener los detalles del producto según el ID, por ejemplo:
    //   const productId = '123'; // ID del producto seleccionado (debe ser obtenido dinámicamente)
    //   fetch(`/api/productos/${productId}`)
    //     .then(response => response.json())
    //     .then(data => setProducto(data));
    // }, []);

    // if (!producto) {
    //   return <div>Loading...</div>;
    // }

    return (
        <div className="container">
            <Navbar />
            <div className="producto-details">
                <img src={producto.imagen} alt=''/>
       
                <p>Tipo <br></br>{producto.tipo}</p>
                <p>Marca<br></br> {producto.marca}</p>
                <p>Peso<br></br> {producto.peso}</p>
                <p>Material<br></br> {producto.material}</p>
                <p>Características<br></br>{producto.caracteristicas}</p>
       
                <p className='precioss'>Precio$ {producto.precio}</p>
                <button>Añadir al carrito</button>
            </div>
            <Footer />
        </div>
    );
}

export default DetallesProductos;