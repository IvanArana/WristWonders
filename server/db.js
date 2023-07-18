const mysql = require("mysql2");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, PORT } = process.env;
const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  
  module.exports = db;