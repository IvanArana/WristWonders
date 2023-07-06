import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { BsPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

function CategoriaUser() {
  const [productos, setProductos] = useState([]);
  const [productosPorTipo, setProductosPorTipo] = useState({});
  const [productosPorMaterial, setProductosPorMaterial] = useState({});
  const [productosPorMarca, setProductosPorMarca] = useState({});

  useEffect(() => {//   api de prueba https://fakestoreapi.com/products
    fetch (' https://jsonplaceholder.typicode.com/photos?_limit=6')
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
        <h1>Catálogo de Productos</h1>
        <div>
          <h2>Por tipo</h2>
          {Object.keys(productosPorTipo).map((tipo) => (
            <div key={tipo}>
              <h3>{tipo}</h3>
              {productosPorTipo[tipo].map((producto) => (
                <div key={producto.id} className="producto">
                  <img src={producto.image} alt={producto.name} />
                  <h4>{producto.name}</h4>
                  <p>Precio: ${producto.price}</p>
                  <button>Ver detalles</button>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div>
          <h2>Por material</h2>
          {Object.keys(productosPorMaterial).map((material) => (
            <div key={material}>
              <h3>{material}</h3>
              {productosPorMaterial[material].map((producto) => (
                <div key={producto.id} className="producto">
                  <img src={producto.image} alt={producto.name} />
                  <h4>{producto.name}</h4>
                  <p>Precio: ${producto.price}</p>
                  <button>Ver detalles</button>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div>
          <h2>Por marca</h2>
          {Object.keys(productosPorMarca).map((marca) => (
            <div key={marca}>
              <h3>{marca}</h3>
              {productosPorMarca[marca].map((producto) => (
                <div key={producto.id} className="producto">
                  <img src={producto.image} alt={producto.name} />
                  <h4>{producto.name}</h4>
                  <p>Precio: ${producto.price}</p>
                  <button>Ver detalles</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoriaUser;
