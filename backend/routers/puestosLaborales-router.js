const express = require('express');
const router = express.Router();

module.exports = function (db) {
    // Obtener Puestos Laborales
    router.get('/', async (req, res) => {
        try {
            const results = await db.query('SELECT * FROM kz_puestosLaborales');
            res.send(results);
        } catch (error) {
            res.status(500).send('Error al realizar la consulta');
        }
    });

    // Guardar Puestos Laborales
    router.post('/crear', async (req, res) => {
        const { idDep, nombre, estado } = req.body;
        const query = 'INSERT INTO kz_puestosLaborales (idDep, nombre, estado) VALUES (?, ?, ?)';

        try {
            await db.query(query, [idDep, nombre, estado]);
            res.status(201).json({ message: 'Puesto Laboral guardada exitosamente'});
        } catch (error) {
            res.status(500).json({ error: 'Error al realizar la inserción' });
        }
    });

     // Actualizar Puestos Laborales
     router.put('/:idPue', async (req, res) => {
        const { idDep, nombre, estado } = req.body;
        const idPue = req.params.idPue;
        try {
            await db.query(
            'UPDATE kz_puestosLaborales SET idDep=?, nombre=?, estado=? WHERE idPue=?',
            [nombre, idDep, estado, idPue]);
            res.send({ message: 'Registro actualizado correctamente' });
        } catch (error) {
            res.status(500).send('Error al actualizar el registro');
        }
      });

      // Eliminar Puestos Laborales
     router.delete('/:idPue', async (req, res) => {
        const idPue = req.params.idPue;
        try {
            await db.query(
            'DELETE FROM kz_puestosLaborales WHERE idPue=?',
            [idPue]);
            res.send({ message: 'Registro eliminado correctamente' });
        } catch (error) {
            res.status(500).send('Error al eliminaar el registro');
        }
      });

    return router;
}