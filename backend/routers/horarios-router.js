const express = require('express');
const router = express.Router();

module.exports = function (db) {
    // Obtener Horarios
    router.get('/', async (req, res) => {
        try {
            const results = await db.query('SELECT * FROM kz_horarios');
            res.send(results);
        } catch (error) {
            res.status(500).send('Error al realizar la consulta');
        }
    });

    return router;
}