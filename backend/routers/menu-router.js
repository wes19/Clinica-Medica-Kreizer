var express = require('express');
var router = express.Router();

module.exports = function (db) {
    // Obtener Menú
    router.get('/', async (req, res) => {
        try {
            const results = await db.query('SELECT * FROM kz_menu');
            res.send(results);
        } catch (error) {
            console.error('Error al realizar la consulta: ', error);
            res.status(500).send('Error al realizar la consulta');
        }
    });

    //Actualizar Menús
    router.put('/:idMenu', async (req, res) => {
        const { nombre, imagen, url, estado } = req.body;
        const idMenu = req.params.idMenu;
        try {
            await db.query(
            'UPDATE kz_menu SET nombre=?, imagen=?, url=?, estado=? WHERE idMenu=?',
            [nombre, imagen, url, estado, idMenu]
            );
            res.send({ message: 'Registro actualizado correctamente' });
        } catch (error) {
            console.error('Error al actualizar el registro: ', error);
            res.status(500).send('Error al actualizar el registro');
        }
      });

    return router;
};
