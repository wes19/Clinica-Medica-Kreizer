var express = require('express');
var router = express.Router();

// Obtener Especialidades
module.exports = function (db) {
    router.get('/lista', (req, res) => {
        db.query('SELECT * FROM kz_especialidades', (error, results, fields) => {
            if (error) {
                console.error('Error al realizar la consulta: ', error);
                res.status(500).send('Error al realizar la consulta');
                return;
            }
            res.send(results); 
        });
    });

    // Guardar Especialidades
    router.post('/crear', (req, res) => {
        const { nombre, imagen, estado } = req.body;
        const query = 'INSERT INTO kz_especialidades (nombre, imagen, estado) VALUES (?, ?, ?)';
        db.query(query, [nombre, imagen, estado], (error, results, fields) => {
            if (error) {
                console.error('Error al realizar la inserción: ', error);
                res.status(500).send('Error al realizar la inserción');
                return;
            }
            res.status(201).send('Especialidad guardada exitosamente');
        });
    });
    return router;
};