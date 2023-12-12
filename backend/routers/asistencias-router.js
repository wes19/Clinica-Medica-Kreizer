var express = require('express');
var router = express.Router();

module.exports = function (db) {
    // Obtener Asistencias
    router.get('/', async (req, res) => {
        try {
            const results = await db.query('SELECT * FROM kz_asistencias');
            res.send(results);
        } catch (error) {
            res.status(500).send('Error al realizar la consulta');
        }
    });

    return router;
};
