import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../css/Admin.css';
import axios from 'axios';

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
    const [cantidad, setCantidad] = useState(0);

    const tiposRelojOptions = [
        { value: 1, label: 'Análogico' },
        { value: 2, label: 'Digital' },
        { value: 3, label: 'Hora Dual' },
    ];

    const marcasOptions = [
        { value: 1, label: 'Casio' },
        { value: 2, label: 'Timex' },
        { value: 3, label: 'Rolex' },
    ];

    const materialesOptions = [
        { value: 1, label: 'Acero' },
        { value: 2, label: 'Resina' },
        { value: 3, label: 'Combinado' },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar que el tipo de reloj sea un número
        if (!isNaN(tipoReloj)) {
            // Aquí puedes realizar la lógica de envío del formulario o guardar los datos
            const productoData = {
                nombre_producto: nombreProducto,
                tipo_reloj: tipoReloj,
                marca: marca,
                material: material,
                peso: peso,
                res_agua: resistenciaAgua,
                pila_mov: duracionPilas,
                imagen: urlImagen,
                precio: precio,
                cantidad: cantidad,
            };

            axios
                .post('http://localhost:3001/productos', productoData)
                .then((response) => {
                    alert('Producto agregado con éxito.');
                    // Redireccionar a la vista de ProductosAD
                    // Por ejemplo: history.push('/productosAD')
                })
                .catch((error) => {
                    console.log(error);
                    alert('Error al agregar el producto. Por favor, inténtalo de nuevo.');
                });
        } else {
            alert('Por favor, selecciona un tipo de reloj válido.');
        }
    };

    return (
        <div className="container-lo">
            <Sidebar />

            <div id="content" className="p-4 p-md-5 pt-5">
                <h2 className="mb-4" style={{ color: '#2e4b90' }}>
                    Agregar Productos
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="nombreProducto">Nombre del Producto:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombreProducto"
                                value={nombreProducto}
                                onChange={(e) => setNombreProducto(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="tipoReloj">Tipo de Reloj:</label>
                            <select
                                className="form-control"
                                id="tipoReloj"
                                value={tipoReloj}
                                onChange={(e) => setTipoReloj(e.target.value)}
                            >
                                <option value="">Seleccione un tipo de reloj</option>
                                {tiposRelojOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="marca">Marca:</label>
                            <select
                                className="form-control"
                                id="marca"
                                value={marca}
                                onChange={(e) => setMarca(e.target.value)}
                            >
                                <option value="">Seleccione una marca</option>
                                {marcasOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="peso">Peso:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="peso"
                                value={peso}
                                onChange={(e) => setPeso(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="material">Material:</label>
                            <select
                                className="form-control"
                                id="material"
                                value={material}
                                onChange={(e) => setMaterial(e.target.value)}
                            >
                                <option value="">Seleccione un material</option>
                                {materialesOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
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
                    <div className="form-group">
                        <label htmlFor="cantidad">Cantidad:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="cantidad"
                            value={cantidad}
                            onChange={(e) => setCantidad(e.target.value)}
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