var express = require('express');
var router = express.Router();

module.exports = function (db) {
    // Obtener Ausencias
    router.get('/', async (req, res) => {
        try {
            const results = await db.query('SELECT * FROM kz_ausencias');
            res.send(results);
        } catch (error) {
            res.status(500).send('Error al realizar la consulta');
        }
    });

    //Actualizar Ausencias
    router.put('/:idAus', async (req, res) => {
        const { estado } = req.body;
        const idAus = req.params.idAus;
        try {
            await db.query(
            'UPDATE kz_ausencias SET estado=? WHERE idAus=?',
            [estado, idAus]);
            res.send({ message: 'Registro actualizado correctamente' });
        } catch (error) {
            res.status(500).send('Error al actualizar el registro');
        }
      });

    return router;
};
