import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CategoriaUser() {
    const [productos, setProductos] = useState([]);
    const [productosPorTipo, setProductosPorTipo] = useState({});
    const [productosPorMaterial, setProductosPorMaterial] = useState({});
    const [productosPorMarca, setProductosPorMarca] = useState({});
    const maxImagenesPorCategoria = 3; // Número máximo de imágenes a mostrar por categoría

    useEffect(() => {//   api de prueba https://fakestoreapi.com/products
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
                const productosPorTipo = {};
                const productosPorMaterial = {};
                const productosPorMarca = {};

                data.forEach((producto) => {
                    // Agrupar por tipo
                    if (!productosPorTipo[producto.type]) {
                        productosPorTipo[producto.type] = [];
                    }
                    productosPorTipo[producto.type].push(producto);

                    // Agrupar por material
                    if (!productosPorMaterial[producto.material]) {
                        productosPorMaterial[producto.material] = [];
                    }
                    productosPorMaterial[producto.material].push(producto);

                    // Agrupar por marca
                    if (!productosPorMarca[producto.brand]) {
                        productosPorMarca[producto.brand] = [];
                    }
                    productosPorMarca[producto.brand].push(producto);
                });

                setProductosPorTipo(productosPorTipo);
                setProductosPorMaterial(productosPorMaterial);
                setProductosPorMarca(productosPorMarca);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container">
            <Navbar />

            <div className="usuario">
                <div>
                    <Link to="/ProductosTipo" className="link-style">
                        <h2>Por tipo</h2>
                    </Link>
                    {Object.keys(productosPorTipo).map((tipo) => (
                        <div key={tipo}>
              
                            <div className="product-list">
                                {productosPorTipo[tipo].slice(0, maxImagenesPorCategoria).map((producto) => (
                                    <div key={producto.id} className="producto">
                                        <img src={producto.image} alt={producto.name} />
                                        <h4>{producto.name}</h4>
                                        <p>Tipo: {}</p>
                                        <Link to="/ProductosTipo">
                                            <button>Ver Productos</button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
        
                <div>
                    <Link to="/ProductosMaterial" className="link-style">
                        <h2>Por material</h2>
                    </Link>
                    {Object.keys(productosPorMaterial).map((material) => (
                        <div key={material}>
              
                            <div className="product-list">
                                {productosPorMaterial[material].slice(0, maxImagenesPorCategoria).map((producto) => (
                                    <div key={producto.id} className="producto">
                                        <img src={producto.image} alt={producto.name} />
                                        <h4>{producto.name}</h4>
                                        <p>Material: {}</p>
                                        <Link to="/ProductosMaterial">
                                            <button>Ver Productos</button>
                                        </Link>
                  
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            
                <div>
                    <Link to="/ProductosMarca" className="link-style">
                        <h2>Por marca</h2>
                    </Link>
                    {Object.keys(productosPorMarca).map((marca) => (
                        <div key={marca}>
             
                            <div className="product-list">
                                {productosPorMarca[marca].slice(0, maxImagenesPorCategoria).map((producto) => (
                                    <div key={producto.id} className="producto">
                                        <img src={producto.image} alt={producto.name} />
                                        <h4>{producto.name}</h4>
                                        <p>Marca: {}</p>
                                        <Link to="/ProductosMarca">
                                            <button>Ver Productos</button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CategoriaUser;
