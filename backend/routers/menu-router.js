var express = require('express');
var router = express.Router();

module.exports = function (db) {
    // Obtener Menú
    router.get('/', async (req, res) => {
        try {
            const results = await db.query('SELECT * FROM kz_menu');
            res.send(results);
        } catch (error) {
            res.status(500).send('Error al realizar la consulta');
        }
    });

    // Crear Menú
    router.post('/', async (req, res) => {
        const { nombre, imagen, url, estado } = req.body;
        const query = 'INSERT INTO kz_menu (nombre, imagen, url, estado) VALUES (?, ?, ?, ?)';

        try {
            await db.query(query, [nombre, imagen, url, estado]);
            res.status(201).json({ message: 'Especialidad guardada exitosamente'});
        } catch (error) {
            res.status(500).json({ error: 'Error al realizar la inserción' });
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
            res.status(500).send('Error al actualizar el registro');
        }
      });

       //Eliminar Menús
      router.delete('/lista/:idMenu', async (req, res) => {
        const idMenu = req.params.idMenu;
        try {
            await db.query(
            'DELETE FROM kz_menu WHERE idMenu=?',
            [idMenu]
            );
            res.send({ message: 'Registro eliminado correctamente' });
        } catch (error) {
            res.status(500).send('Error al eliminaar el registro');
        }
      });

    return router;
};
