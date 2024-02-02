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

    // Actualizar Horarios 
    router.put('/:idHora', async (req, res) => {
        const { idEsp, idEmp, hora_inicio, hora_final, lun, mar, mie, jue, vie, sab, dom, estado } = req.body;
        const idHora = req.params.idHora;
        try {
            await db.query(
            'UPDATE kz_horarios SET idEsp=?, idEmp=?, hora_inicio=?, hora_final=?, lun=?, mar=?, mie=?, jue=?, vie=?, sab=?, dom=?, estado=? WHERE idHora=?',
            [idEsp, idEmp, hora_inicio, hora_final, lun, mar, mie, jue, vie, sab, dom, estado, idHora]);
            res.send({ message: 'Registro actualizado correctamente' });
        } catch (error) {
            res.status(500).send('Error al actualizar el registro');
        }
      });

    // Guardar Horario
    router.post('/', async (req, res) => {
        const { idEsp, idEmp, hora_inicio, hora_final, lun, mar, mie, jue, vie, sab, dom, estado } = req.body;
        const query = 'INSERT INTO kz_horarios (idEsp, idEmp, hora_inicio, hora_final, lun, mar, mie, jue, vie, sab, dom, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

        try {
            await db.query(query, [idEsp, idEmp, hora_inicio, hora_final, lun, mar, mie, jue, vie, sab, dom, estado]);
            res.status(201).json({ message: 'Horario guardado exitosamente'});
        } catch (error) {
            res.status(500).json({ error: 'Error al realizar la inserción' });
        }
    });

    return router;
}