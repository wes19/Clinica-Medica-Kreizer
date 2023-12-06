const express = require('express');
const router = express.Router();

module.exports = function (db) {
    // Obtener Especialidades
    router.get('/lista', async (req, res) => {
        try {
            const results = await db.query('SELECT * FROM kz_especialidades');
            res.send(results);
        } catch (error) {
            console.error('Error al realizar la consulta: ', error);
            res.status(500).send('Error al realizar la consulta');
        }
    });

    // Guardar Especialidades
    router.post('/crear', async (req, res) => {
        const { nombre, imagen, estado } = req.body;
        const query = 'INSERT INTO kz_especialidades (nombre, imagen, estado) VALUES (?, ?, ?)';

        try {
            await db.query(query, [nombre, imagen, estado]);
            res.status(201).json({ message: 'Especialidad guardada exitosamente'});
        } catch (error) {
            console.error('Error al realizar la inserción: ', error);
            res.status(500).json({ error: 'Error al realizar la inserción' });
        }
    });

     //Actualizar Especialidades
     router.put('/lista/:idEsp', async (req, res) => {
        const { nombre, imagen, estado } = req.body;
        const idEsp = req.params.idEsp;
        try {
            await db.query(
            'UPDATE kz_menu SET nombre=?, imagen=?, estado=? WHERE idEsp=?',
            [nombre, imagen, estado, idEsp]
            );
            res.send({ message: 'Registro actualizado correctamente' });
        } catch (error) {
            console.error('Error al actualizar el registro: ', error);
            res.status(500).send('Error al actualizar el registro');
        }
      });

    return router;
}