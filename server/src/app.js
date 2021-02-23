const express = require('express');
const app = express();

const api = require('./api')

app.use(express.json())

app.get('/inicio', (req, res) => {
    res.json({
        mensaje: 'Hola, bienvenido a mi servidor 🥰'
    });
});

app.use('/api/v1', api);

module.exports = app;