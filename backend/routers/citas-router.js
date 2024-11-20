var express = require('express');
var router = express.Router();

module.exports = function (db) {
    // Obtener Paciente
    router.get('/', async (req, res) => {
        try {
            const results = await db.query('SELECT * FROM kz_citas');
            res.send(results);
        } catch (error) {
            res.status(500).send('Error al realizar la consulta');
        }
    });

    // Crear Cita
    router.post('/', async (req, res) => {
        const { idPac, idHora, fecha_cita, estado } = req.body;
        const query = 'INSERT INTO kz_citas (idPac, idHora, fecha_cita, estado) VALUES (?, ?, ?, ?)';
        try {
            await db.query(query, [idPac, idHora, fecha_cita, estado]);
            res.status(201).json({ message: 'Registro guardado exitosamente'});
        } catch (error) {
            res.status(500).json({ error: 'Error al realizar la inserción' });
        }
    });
    
   // Actualizar Cita
    router.put('/:idCita', async (req, res) => {
        const { idPac, idHora, fecha_cita, estado } = req.body;
        const idCita = req.params.idCita;
        try {
            await db.query(
                'UPDATE kz_citas SET idPac=?, idHora=?, fecha_cita=?, estado=? WHERE idCita=?',
                [idPac, idHora, fecha_cita, estado, idCita]
            );
            res.send({ message: 'Registro actualizado correctamente' });
        } catch (error) {
            res.status(500).send({ error: 'Error al actualizar el registro' });
        }
    });

    // Eliminar Cita
    router.delete('/:idCita', async (req, res) => {
        const idCita = req.params.idCita;
        try {
            await db.query(
            'DELETE FROM kz_citas WHERE idCita=?',
            [idCita]);
            res.send({ message: 'Registro eliminado correctamente' });
        } catch (error) {
            res.status(500).send('Error al eliminar el registro');
        }
    });

    // Buscar Citas
    router.get('/buscar', async (req, res) => {
        const { criterio1, criterio2 } = req.query;
        const query = `
            SELECT c.*, p.nombre, p.fecha_nacimiento
            FROM kz_citas c
            JOIN kz_pacientes p ON p.idPac = c.idPac
            WHERE c.idHora = ? AND c.fecha_cita = ?;
        `;
        const values = [criterio1, criterio2];

        try {
            const result = await db.query(query, values);
            if (result.length === 0) {
                return res.status(200).json([]);
            }
            res.status(200).json(result); 
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al realizar la búsqueda' });
        }
    });

    return router;
};
