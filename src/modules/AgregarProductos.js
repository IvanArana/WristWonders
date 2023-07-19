import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import '../css/Admin.css';

const AgregarProductos = () => {
    const [nombreProducto, setNombreProducto] = useState('');
    const [tipoReloj, setTipoReloj] = useState('');
    const [marca, setMarca] = useState('');
    const [peso, setPeso] = useState('');
    const [material, setMaterial] = useState('');
    const [urlImagen, setUrlImagen] = useState('');
    const [resistenciaAgua, setResistenciaAgua] = useState('');
    const [duracionPilas, setDuracionPilas] = useState('');
    const [precio, setPrecio] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar la lógica de envío del formulario o guardar los datos

        // Ejemplo: Mostrar los datos en la consola
        console.log({
            nombreProducto,
            tipoReloj,
            marca,
            peso,
            material,
            urlImagen,
            resistenciaAgua,
            duracionPilas,
            precio,
        });
    };

    return (
        <div className="container-lo">
            <Sidebar />

            <div id="content" className="p-4 p-md-5 pt-5">
                <h2 className="mb-4" style={{ color: '#2e4b90' }}>
          Agregar Productos
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombreProducto">Nombre del Producto:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombreProducto"
                            value={nombreProducto}
                            onChange={(e) => setNombreProducto(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tipoReloj">Tipo de Reloj:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="tipoReloj"
                            value={tipoReloj}
                            onChange={(e) => setTipoReloj(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="marca">Marca:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="marca"
                            value={marca}
                            onChange={(e) => setMarca(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="peso">Peso:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="peso"
                            value={peso}
                            onChange={(e) => setPeso(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="material">Material:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="material"
                            value={material}
                            onChange={(e) => setMaterial(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="urlImagen">URL de la Imagen:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="urlImagen"
                            value={urlImagen}
                            onChange={(e) => setUrlImagen(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="resistenciaAgua">Resistencia al Agua:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="resistenciaAgua"
                            value={resistenciaAgua}
                            onChange={(e) => setResistenciaAgua(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duracionPilas">Duración de las Pilas:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="duracionPilas"
                            value={duracionPilas}
                            onChange={(e) => setDuracionPilas(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="precio">Precio $:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="precio"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ backgroundColor: '#2e4b90' }}
                    >
            Agregar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AgregarProductos;
