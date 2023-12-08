var express = require('express');
var router = express.Router();

// Obtener Empleados
module.exports = function (db) {
    // Obtener empleados
    router.get('/lista', async (req, res) => {
        try {
            const results = await db.query('SELECT * FROM kz_empleados');
            res.send(results);
        } catch (error) {
            res.status(500).send('Error al realizar la consulta');
        }
    });

    return router;
};
