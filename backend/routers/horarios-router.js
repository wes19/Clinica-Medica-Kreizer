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

    // Obtener Horarios por Especialidad
    router.get('/cargar-horarios/:idEsp', async (req, res) => {
        const { idEsp } = req.params;
        try {
            const results = await db.query(`
                SELECT h.*, e.nombre AS especialidad, em.nombre AS nombreEmpleado, em.apellidos AS apellidosEmpleado
                FROM kz_horarios h
                INNER JOIN kz_especialidades e ON h.idEsp = e.idEsp
                INNER JOIN kz_empleados em ON h.idEmp = em.idEmp
                WHERE h.idEsp = ? and h.estado = 1`, [idEsp]);
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

    // Eliminar Horarios
    router.delete('/:idHora', async (req, res) => {
        const idHora = req.params.idHora;
        try {
            await db.query(
            'DELETE FROM kz_horarios WHERE idHora=?',
            [idHora]);
            res.send({ message: 'Registro eliminado correctamente' });
        } catch (error) {
            res.status(500).send('Error al eliminaar el registro');
        }
    });

    return router;
}