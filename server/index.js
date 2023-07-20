if(process.env.NODE_ENV !== 'production'){require('dotenv').config();}
const express = require('express');
const app = express();
const cors = require('cors');
const productosController = require('./controllers/productosController');
const usuariosController = require('./controllers/usuariosController');
app.use(cors());
app.use(express.json());

app.use('/productos', productosController);
app.use('/usuarios', usuariosController);

app.listen(process.env.PORT,()=>{
    console.log(`Running on port ${process.env.PORT}`);
});
