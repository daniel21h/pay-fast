const mysql = require('mysql');

function createDBConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'docker',
    database: 'payfast'
  });
}

module.exports = () => {
  return createDBConnection;
}