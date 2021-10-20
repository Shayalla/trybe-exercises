const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'jessie',
  password: 'Inuyasha91%',
  database: 'mvc_example'});

module.exports = connection;