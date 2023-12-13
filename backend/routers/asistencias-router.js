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

    // Actualizar Asistencias
    router.put('/:idAsi', async (req, res) => {
        const { entrada, salida } = req.body;
        const idAsi = req.params.idAsi;
        try {
            await db.query(
            'UPDATE kz_asistencias SET entrada=?, salida=? WHERE idAsi=?',
            [entrada, salida, idAsi]);
            res.send({ message: 'Registro actualizado correctamente' });
        } catch (error) {
            res.status(500).send('Error al actualizar el registro');
        }
      });

    return router;
};
