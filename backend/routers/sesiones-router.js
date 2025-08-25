const express = require('express');
const router = express.Router();

module.exports = function (db) {

    // Obtener Sesiones
    router.get('/', async (req, res) => {
        try {
            const results = await db.query(`
                SELECT s.*, e.nombre, e.apellidos, esp.nombre AS especialidad
                FROM kz_sesiones s
                LEFT JOIN kz_empleados e ON s.idEmp = e.idEmp
                LEFT JOIN kz_especialidades esp ON s.idEsp = esp.idEsp
            `);
            res.json(results);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener las sesiones');
        }
    });

    // Guardar Sesiones
    router.post('/crear', async (req, res) => {
        const { idEmp, idEsp, estado } = req.body;
        const query = 'INSERT INTO kz_sesiones (idEmp, idEsp, estado) VALUES (?, ?, ?)';
        try {
            await db.query(query, [idEmp, idEsp, estado]);
            res.status(201).json({ message: 'Sesión guardada exitosamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al realizar la inserción' });
        }
    });

    // Actualizar Sesiones
    router.put('/:idSes', async (req, res) => {
        const { idSes } = req.params;
        const { idEmp, idEsp, estado } = req.body;
        try {
            await db.query('UPDATE kz_sesiones SET idEmp = ?, idEsp = ?, estado = ? WHERE idSes = ?', [idEmp, idEsp, estado, idSes]);
            res.json({ message: 'Sesión actualizada' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al actualizar la sesión');
        }
    });

    // Eliminar Sesiones
    router.delete('/:idSes', async (req, res) => {
        const { idSes } = req.params;
        try {
            await db.query(`DELETE FROM kz_sesiones WHERE idSes = ?`, [idSes]);
            res.json({ message: 'Sesión eliminada' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al eliminar la sesión');
        }
    });


    return router;
}