var express = require('express');
var router = express.Router();

module.exports = function (db) {

    // Crear Cita
    router.post('/', async (req, res) => {
        const { idPac, idHora, fecha_cita } = req.body;
        const query = 'INSERT INTO kz_citas (idPac, idHora, fecha_cita) VALUES (?, ?, ?)';
        try {
            await db.query(query, [idPac, idHora, fecha_cita]);
            res.status(201).json({ message: 'Registro guardado exitosamente'});
        } catch (error) {
            res.status(500).json({ error: 'Error al realizar la inserción' });
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
        const { idHora, fecha_cita } = req.query;
        const query = `
            SELECT c.*, p.nombre, p.fecha_nacimiento, p.identidad, p.celular FROM kz_citas c
            JOIN kz_pacientes p ON p.idPac = c.idPac
            WHERE c.idHora = ? AND c.fecha_cita = ?
            ORDER BY c.prioridad ASC, c.idCita ASC;`;
        const values = [idHora, fecha_cita];
        try {
            const result = await db.query(query, values);
            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al realizar la búsqueda' });
        }
    });

    // Actualizar Estado
    router.put('/actualizarEstado/:idCita', async (req, res) => {
        const { estado } = req.body;
        const idCita = req.params.idCita;
        let prioridad = 0;
        switch (estado) {
          case 'En Progreso': prioridad = 1; break;
          case 'En Espera': prioridad = 2; break;
          case 'Pendiente': prioridad = 3; break;
          case 'Atendido': prioridad = 4; break;
          case 'Expirado': prioridad = 5; break;
          case 'Cancelado': prioridad = 6; break;
        }
        try {
          if (estado === 'En Espera') {
            const fecha_confirmacion = new Date();
            await db.query(
              'UPDATE kz_citas SET estado = ?, prioridad = ?, fecha_confirmacion = ? WHERE idCita = ?',
              [estado, prioridad, fecha_confirmacion, idCita]
            );
          } else {
            await db.query(
              'UPDATE kz_citas SET estado = ?, prioridad = ? WHERE idCita = ?',
              [estado, prioridad, idCita]
            );
          }
          res.send({ message: 'Registro actualizado correctamente' });
        } catch (error) {
          res.status(500).send({ error: 'Error al actualizar el registro' });
        }
      });
   
    return router;
};
