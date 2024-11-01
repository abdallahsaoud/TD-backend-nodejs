const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME,
    port: 3306
  });
  
  db.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données:', err.stack);
      return;
    }
    console.log('Connecté à la base de données.');
  });

  module.exports = db;