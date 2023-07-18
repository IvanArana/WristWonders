import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BsPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';

function Usuario() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.log(error));
  }, []);

  const [catalogoProductos, setCatalogoProductos] = useState([]);

  const getCatalogo = () => {
    axios.get('http://localhost:3001/productos').then((response) => {
      setCatalogoProductos(response.data);
    });
  };

  useEffect(() => {
    getCatalogo();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="usuario">
        <h1>Catálogo de Productos</h1>
        <div className="catalogo">
          {catalogoProductos.map((producto) => (
            <div key={producto.id} className="producto">
              <img src={producto.imagen} alt="" />
              <h3>{producto.nombre_producto}</h3>
              <p>{producto.nombre_tipo}</p>
              <p>${producto.precio}.00</p>
              <button><Link to={`/productos/${producto.idproducto}`}>Ver producto</Link></button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Usuario;