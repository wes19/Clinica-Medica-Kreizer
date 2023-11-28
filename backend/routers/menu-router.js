var express = require('express');
var router = express.Router();

// Obtener Menú
module.exports = function (db) {
    router.get('/', (req, res) => {
        db.query('SELECT * FROM kz_menu', (error, results, fields) => {
            if (error) {
                console.error('Error al realizar la consulta: ', error);
                res.status(500).send('Error al realizar la consulta');
                return;
            }
            res.send(results);
        });
    });

    return router;
};
