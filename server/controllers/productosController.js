const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/count", (req, res) => {
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

router.get("/", (req, res) => {
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

router.get("/:id", (req, res) => {
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

module.exports = router;
