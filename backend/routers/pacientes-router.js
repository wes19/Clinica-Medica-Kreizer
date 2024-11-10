var express = require('express');
var router = express.Router();

module.exports = function (db) {
    // Obtener Paciente
    router.get('/', async (req, res) => {
        try {
            const results = await db.query('SELECT * FROM kz_pacientes');
            res.send(results);
        } catch (error) {
            res.status(500).send('Error al realizar la consulta');
        }
    });

    // Crear Paciente
    router.post('/', async (req, res) => {
        const { nombre, identidad, celular, correo, fecha_nacimiento, RTN, genero, pais, departamento, direccion } = req.body;
        const query = 'INSERT INTO kz_pacientes (nombre, identidad, celular, correo, fecha_nacimiento, RTN, genero, pais, departamento, direccion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        try {
            await db.query(query, [nombre, identidad, celular, correo, fecha_nacimiento, RTN, genero, pais, departamento, direccion]);
            res.status(201).json({ message: 'Registro guardado exitosamente'});
        } catch (error) {
            res.status(500).json({ error: 'Error al realizar la inserción' });
        }
    });
    
   // Actualizar Paciente
    router.put('/:idPac', async (req, res) => {
        const { nombre, identidad, celular, correo, fecha_nacimiento, RTN, genero, pais, departamento, direccion } = req.body;
        const idPac = req.params.idPac;
        try {
            await db.query(
                'UPDATE kz_pacientes SET nombre=?, identidad=?, celular=?, correo=?, fecha_nacimiento=?, RTN=?, genero=?, pais=?, departamento=?, direccion=? WHERE idPac=?',
                [nombre, identidad, celular, correo, fecha_nacimiento, RTN, genero, pais, departamento, direccion, idPac]
            );
            res.send({ message: 'Registro actualizado correctamente' });
        } catch (error) {
            res.status(500).send({ error: 'Error al actualizar el registro' });
        }
    });

    // Eliminar Paciente
      router.delete('/:idPac', async (req, res) => {
        const idPac = req.params.idPac;
        try {
            await db.query(
            'DELETE FROM kz_pacientes WHERE idPac=?',
            [idPac]);
            res.send({ message: 'Registro eliminado correctamente' });
        } catch (error) {
            res.status(500).send('Error al eliminar el registro');
        }
      });

    return router;
};
