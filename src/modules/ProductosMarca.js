import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ProductosMarca() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
            .then((response) => response.json())
            .then((data) => setProductos(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container">
            <Navbar />

            <div className="usuario">
                <h1 className='titulos'>Catálogo de Productos por marca</h1>
                <div className="catalogo">
                    {productos.map((producto) => (
                        <div key={producto.id} className="producto">
                            <img src={producto.url} alt={producto.title} />
                            <h3 className='nombres'>{producto.title}</h3>
                            <p>Precio: ${producto.price}</p>
                            <Link to="/DetallesProductos">
                                <button>Ver detalles</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
     
        </div>
    );
}

export default ProductosMarca;