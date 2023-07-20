import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Carrito() {
    const [carrito, setCarrito] = useState([
        {
            id: 1,
            nombre: 'Producto 1',
            precio: 19.99,
            cantidad: 2,
            imagen: 'ruta-imagen-1.jpg'
        },
        {
            id: 2,
            nombre: 'Producto 2',
            precio: 29.99,
            cantidad: 1,
            imagen: 'ruta-imagen-2.jpg'
        },
        {
            id: 3,
            nombre: 'Producto 3',
            precio: 9.99,
            cantidad: 4,
            imagen: 'ruta-imagen-3.jpg'
        },
    ]);

    const calcularTotal = () => {
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            total += carrito[i].precio * carrito[i].cantidad;
        }
        return total.toFixed(2);
    };

    const cambiarCantidad = (id, nuevaCantidad) => {
        const nuevosProductos = carrito.map((producto) => {
            if (producto.id === id) {
                return { ...producto, cantidad: nuevaCantidad };
            }
            return producto;
        });
        setCarrito(nuevosProductos);
    };

    const eliminarProducto = (id) => {
        const nuevosProductos = carrito.filter((producto) => producto.id !== id);
        setCarrito(nuevosProductos);
    };

    return (
        <div className="container">
            <Navbar />
            <div className="carrito-lista">
                <h2>Carrito</h2>
                {carrito.map((producto) => (
                    <div className="carrito-tarjeta" key={producto.id}>
                        <div className="carrito-imagen">
                            <img src={producto.imagen} />
                        </div>
                        <div className="carrito-detalle">
                            <h3>{producto.nombre}</h3>
                            <p>Precio: ${producto.precio}</p>
                            <div className="carrito-cantidad">
                                <button onClick={() => cambiarCantidad(producto.id, producto.cantidad - 1)}>-</button>
                                <span>{producto.cantidad}</span>
                                <button onClick={() => cambiarCantidad(producto.id, producto.cantidad + 1)}>+</button>
                            </div>
                        </div>
                        <div className="carrito-eliminar">
                            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
                <div className="carrito-total">
                    <h3>Total: ${calcularTotal()}</h3>
                    <button>Finalizar compra</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Carrito;
