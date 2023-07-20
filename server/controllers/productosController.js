const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/count', (req, res) => {
    db.query('SELECT COUNT(*) AS total FROM producto', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error en el servidor');
        } else {
            const count = result[0].total;
            res.send({ count });
        }
    });
});

router.get('/filtro', (req, res) => {
    const { tipo_reloj, marca, material } = req.query;
    let query = 'SELECT p.*, tr.nombre_tipo, m.nombre_marca, ma.nombre_material FROM producto p JOIN tipo_reloj tr ON p.tipo_reloj = tr.idtipo_reloj JOIN marca m ON p.marca = m.idmarca JOIN material ma ON p.material = ma.idmaterial';
    let params = [];
    if (tipo_reloj) {

        query += ' WHERE p.tipo_reloj = ?';

        params.push(tipo_reloj);
    }
    if (marca) {
        if (params.length > 0) {
            query += ' AND p.marca = ?';
        } else {
            query += ' WHERE p.marca = ?';
        }
        params.push(marca);
    }
    if (material) {
        if (params.length > 0) {
            query += ' AND p.material = ?';
        } else {
            query += ' WHERE p.material = ?';
        }
        params.push(material);
    }
    db.query(query, params, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error en el servidor');
        } else {
            res.send(result);
        }
    });
});

router.get('/', (req, res) => {
    db.query(
        'SELECT p.*, tr.nombre_tipo, m.nombre_marca, ma.nombre_material FROM producto p JOIN tipo_reloj tr ON p.tipo_reloj = tr.idtipo_reloj JOIN marca m ON p.marca = m.idmarca JOIN material ma ON p.material = ma.idmaterial',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query(
        'SELECT p.*, tr.nombre_tipo, m.nombre_marca, ma.nombre_material FROM producto p JOIN tipo_reloj tr ON p.tipo_reloj = tr.idtipo_reloj JOIN marca m ON p.marca = m.idmarca JOIN material ma ON p.material = ma.idmaterial WHERE p.idproducto = ?',
        [id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en el servidor');
            } else {
                if (result.length > 0) {
                    const producto = result[0];
                    res.send(producto);
                } else {
                    res.status(404).send('Producto no encontrado');
                }
            }
        }
    );
});

router.post('/', (req, res) => {
    const { nombre_producto, tipo_reloj, marca, material,peso,res_agua,pila_mov,imagen,precio,cantidad } = req.body;
    db.query(
        'INSERT INTO producto (nombre_producto, tipo_reloj, marca, material,peso,res_agua,pila_mov,imagen,precio,cantidad) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre_producto, tipo_reloj, marca, material,peso,res_agua,pila_mov,imagen,precio,cantidad ?? 0],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en el servidor');
            } else {
                res.send('Producto agregado');
            }
        }
    );
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query(
        'SELECT * FROM producto WHERE idproducto = ?',
        [id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en el servidor');
            } else {
                if (result.length > 0) {
                    db.query(
                        'DELETE FROM producto WHERE idproducto = ?',
                        [id],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                                res.status(500).send('Error en el servidor');
                            } else {
                                res.send('Producto eliminado');
                            }
                        }
                    );
                } else {
                    res.status(404).send('Producto no encontrado');
                }
            }
        }
    );
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre_producto, tipo_reloj, marca, material,peso,res_agua,pila_mov,imagen,precio,cantidad } = req.body;
    db.query(
        'SELECT * FROM producto WHERE idproducto = ?',
        [id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en el servidor');
            } else {
                if (result.length > 0) {
                    db.query(
                        'UPDATE producto SET nombre_producto = ?, tipo_reloj = ?, marca = ?, material = ?, peso = ?, res_agua = ?, pila_mov = ?, imagen = ?, precio = ?, cantidad = ? WHERE idproducto = ?',
                        [nombre_producto, tipo_reloj, marca, material,peso,res_agua,pila_mov,imagen,precio,cantidad ?? 0, id],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                                res.status(500).send('Error en el servidor');
                            } else {
                                res.send('Producto modificado');
                            }
                        }
                    );
                } else {
                    res.status(404).send('Producto no encontrado');
                }
            }
        }
    );
});

module.exports = router;
