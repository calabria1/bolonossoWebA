const express = require('express');
const app = express();
const port = 3006;
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./banco/conexao');


app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    console.log('Rota raiz acessada');
    res.sendFile(path.join(__dirname, '../view/home/index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/usuarios', (req, res) => {
    const sql = 'SELECT * FROM usuarios';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            res.status(500).send('Erro interno do seravidor');
            return;
        }
        console.log(results);
    });
});
