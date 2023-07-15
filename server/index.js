const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"minerserver.servegame.com",
    user:"admin",
    password:"Panabolillo123",
    database:"wristwondersdb"
})

app.listen(3001,()=>{
    console.log("Running on port 3001")
})

/**
 * *Area de trabajo de Ivan
 */
app.get("/productos/count", (req,res)=>{
    db.query('SELECT COUNT(*) AS total FROM producto', (err,result)=>{
        if (err){
            console.log(err);
            res.status(500).send('Error en el servidor');
        }else{
            const count = result[0].total;
            res.send({count});
        }
    });
});

app.get("/admin/count", (req,res)=>{
    db.query('SELECT COUNT(IsAdmin) AS total FROM usuarios WHERE IsAdmin = 1', (err,result)=>{
        if (err){
            console.log(err);
            res.status(500).send('Error en el servidor');
        }else{
            const count = result[0].total;
            res.send({count});
        }
    });
});

app.get("/usuarios/count", (req,res)=>{
    db.query('SELECT COUNT(IsAdmin) AS total FROM usuarios WHERE IsAdmin != 1', (err,result)=>{
        if (err){
            console.log(err);
            res.status(500).send('Error en el servidor');
        }else{
            const count = result[0].total;
            res.send({count});
        }
    });
});

app.get("/categorias/count", (req, res) => {
    db.query(
    `SELECT SUM(total_count) AS total FROM (
        SELECT COUNT(*) AS total_count FROM material
        UNION ALL
        SELECT COUNT(*) AS total_count FROM marca
        UNION ALL
        SELECT COUNT(*) AS total_count FROM tipo_reloj
        ) AS counts`,
    (err, result) => {
        if (err) {
        console.log(err);
        res.status(500).send('Error en el servidor');
        } else {
        const count = result[0].total;
        res.send({ count });
        }
    }
    );
});

app.get("/productos", (req, res) => {
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

// ...

app.get("/productos/:id", (req, res) => {
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
  
  // ...