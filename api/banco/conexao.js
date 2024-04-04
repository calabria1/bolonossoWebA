// Conexão com o banco de dados

const mysql = require('mysql2');

 const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'lojabolo'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dadoos:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados');
});

module.exports = db;