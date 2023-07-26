const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/count', (req, res) => {
    db.query('SELECT COUNT(IsAdmin) AS total FROM usuarios WHERE IsAdmin = 1', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error en el servidor');
        } else {
            const count = result[0].total;
            res.send({ count });
        }
    });
});

router.get('/', (req, res) => {
    db.query(
        'SELECT * FROM usuarios',
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
        'SELECT * FROM usuarios WHERE idusuario = ?',
        [id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en el servidor');
            } else {
                if (result.length > 0) {
                    const usuario = result[0];
                    res.send(usuario);
                } else {
                    res.status(404).send('Usuario no encontrado');
                }
            }
        }
    );
});

router.post('/', (req, res) => {
    const { nombre, email } = req.body;
    db.query(
        'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
        [nombre, email],
        (err) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en el servidor');
            } else {
                res.send('Usuario creado exitosamente');
            }
        }
    );
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email } = req.body;
    db.query(
        'UPDATE usuarios SET nombre = ?, email = ? WHERE idusuario = ?',
        [nombre, email, id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en el servidor');
            } else {
                if (result.affectedRows > 0) {
                    res.send('Usuario actualizado exitosamente');
                } else {
                    res.status(404).send('Usuario no encontrado');
                }
            }
        }
    );
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query(
        'DELETE FROM usuarios WHERE idusuario = ?',
        [id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en el servidor');
            } else {
                if (result.affectedRows > 0) {
                    res.send('Usuario eliminado exitosamente');
                } else {
                    res.status(404).send('Usuario no encontrado');
                }
            }
        }
    );
});

router.post('/login', (req, res) => {
    const { correo, password } = req.body;
    db.query(
        'SELECT * FROM usuarios WHERE correo = ? AND password = ?',
        [correo, password],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en el servidor');
            } else {
                if (result.length > 0) {
                    const usuario = result[0];
                    res.send(usuario);
                } else {
                    res.status(401).send('Credenciales incorrectas');
                }
            }
        }
    );
});

router.post('/register', (req, res) => {
    const { nombre, apellidos, correo, password, direccion } = req.body;
    db.query(
        'SELECT * FROM usuarios WHERE correo = ?',
        [correo],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en el servidor');
            } else {
                if (result.length > 0) {
                    res.status(401).send('El correo ya está registrado');
                } else {
                    insertarUsuario(nombre, apellidos, correo, password, direccion, res);
                }
            }
        }
    );
});
const insertarUsuario = ((nombre, apellidos, correo, password, direccion, res) => {
    db.query(
        'INSERT INTO usuarios (nombre, apellidos, correo, password, direccion) VALUES (?, ?, ?, ?, ?)',
        [nombre, apellidos, correo, password, direccion ?? 'Sin Dirección'],
        (err) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en el servidor');
            } else {
                res.send('Usuario registrado exitosamente');
            }
        }
    );
});


module.exports = router;