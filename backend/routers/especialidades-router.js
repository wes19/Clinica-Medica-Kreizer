const express = require('express');
const router = express.Router();

module.exports = function (db) {
    // Obtener Especialidades
    router.get('/lista', async (req, res) => {
        try {
            const results = await db.query('SELECT * FROM kz_especialidades');
            res.send(results);
        } catch (error) {
            res.status(500).send('Error al realizar la consulta');
        }
    });

    // Obtener Especialidades ID
    router.get('/lista/:idEsp', async (req, res) => {
        try {
            const { idEsp } = req.params;
            const results = await db.query('SELECT nombre FROM kz_especialidades WHERE idEsp = ?', [idEsp]);
            res.send(results);
        } catch (error) {
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
            res.status(500).json({ error: 'Error al realizar la inserción' });
        }
    });

     // Actualizar Especialidades
     router.put('/lista/:idEsp', async (req, res) => {
        const { nombre, imagen, estado } = req.body;
        const idEsp = req.params.idEsp;
        try {
            await db.query(
            'UPDATE kz_especialidades SET nombre=?, imagen=?, estado=? WHERE idEsp=?',
            [nombre, imagen, estado, idEsp]);
            res.send({ message: 'Registro actualizado correctamente' });
        } catch (error) {
            res.status(500).send('Error al actualizar el registro');
        }
      });

      //Eliminar Especialidades
     router.delete('/lista/:idEsp', async (req, res) => {
        const idEsp = req.params.idEsp;
        try {
            await db.query(
            'DELETE FROM kz_especialidades WHERE idEsp=?',
            [idEsp]);
            res.send({ message: 'Registro eliminado correctamente' });
        } catch (error) {
            res.status(500).send('Error al eliminaar el registro');
        }
      });

    return router;
}