const express = require('express');
const router = express.Router();

module.exports = function (db) {

    // Obtener Departamentos
    router.get('/', async (req, res) => {
        try {
            const results = await db.query('SELECT * FROM kz_departamentos');
            res.send(results);
        } catch (error) {
            res.status(500).send('Error al realizar la consulta');
        }
    });

    // Obtener Departamentos activos
    router.get('/activos', async (req, res) => {
        try {
          const results = await db.query('SELECT * FROM kz_departamentos WHERE estado = 1');
          res.send(results);
        } catch (error) {
          res.status(500).send('Error al obtener los departamentos activos');
        }
      });

    // Guardar Departamentos
    router.post('/crear', async (req, res) => {
        const { nombre, estado } = req.body;
        const query = 'INSERT INTO kz_departamentos (nombre, estado) VALUES (?, ?)';
        try {
            await db.query(query, [nombre, estado]);
            res.status(201).json({ message: 'Departamento guardado exitosamente'});
        } catch (error) {
            res.status(500).json({ error: 'Error al realizar la inserción' });
        }
    });

     // Actualizar Departamentos
     router.put('/:idDep', async (req, res) => {
        const { nombre, estado } = req.body;
        const idDep = req.params.idDep;
        try {
            await db.query(
            'UPDATE kz_departamentos SET nombre=?, estado=? WHERE idDep=?',
            [nombre, estado, idDep]);
            res.send({ message: 'Registro actualizado correctamente' });
        } catch (error) {
            res.status(500).send('Error al actualizar el registro');
        }
      });

      // Eliminar Departamentos
     router.delete('/:idDep', async (req, res) => {
        const idDep = req.params.idDep;
        try {
            await db.query(
            'DELETE FROM kz_departamentos WHERE idDep=?',
            [idDep]);
            res.send({ message: 'Registro eliminado correctamente' });
        } catch (error) {
            res.status(500).send('Error al eliminaar el registro');
        }
      });

    return router;
}