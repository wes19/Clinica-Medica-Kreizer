const express = require('express');
const router = express.Router();

module.exports = function (db) {
    // Obtener Ambulancias
    router.get('/', async (req, res) => {
        try {
            const results = await db.query(`
              SELECT a.*, e.nombre, e.apellidos
              FROM kz_ambulancias a
              LEFT JOIN kz_empleados e ON a.idEmp = e.idEmp`);
            res.send(results);
        } catch (error) {
            res.status(500).send('Error al realizar la consulta');
        }
    });

    // Obtener empleados con cargo "Conductor"
    router.get('/conductores', async (req, res) => {
        try {
          const results = await db.query(`
            SELECT e.idEmp, e.nombre, e.apellidos 
            FROM kz_empleados e
            INNER JOIN kz_puestoslaborales p ON e.idPue = p.idPue
            INNER JOIN kz_departamentos d ON p.idDep = d.idDep
            WHERE p.nombre = 'Conductor' AND d.nombre = 'Logistica'`);
          res.send(results);
        } catch (error) {
          console.error(error);
          res.status(500).send('Error al obtener los conductores');
        }
    });
      
    // Guardar Ambulancias
    router.post('/crear', async (req, res) => {
        const { placa, idEmp, tipo_ambulancia, estado } = req.body;
        const query = 'INSERT INTO kz_ambulancias (placa, idEmp, tipo_ambulancia, estado) VALUES (?, ?, ?, ?)';
        try {
            await db.query(query, [placa, idEmp, tipo_ambulancia, estado]);
            res.status(201).json({ message: 'Ambulancia guardada exitosamente'});
        } catch (error) {
            res.status(500).json({ error: 'Error al realizar la inserción' });
        }
    });

    // Guardar Salidas Ambulancia
    router.post('/salida/crear', async (req, res) => {
      const {idAmb, nombre, edad, genero, celular_informante, estado_conciencia, tipo_emergencia, ubicacion, informacion_adicional } = req.body;
      const query = 'INSERT INTO kz_salidas_ambulancia (idAmb, nombre, edad, genero, celular_informante, estado_conciencia, tipo_emergencia, ubicacion, informacion_adicional) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
      try {
          await db.query(query, [idAmb, nombre, edad, genero, celular_informante, estado_conciencia, tipo_emergencia, ubicacion, informacion_adicional]);
          res.status(201).json({ message: 'Salida guardada exitosamente'});
      } catch (error) {
          res.status(500).json({ error: 'Error al realizar la inserción' });
      }
    });

    // Actualizar Ambulancias
    router.put('/detalles/:idAmb', async (req, res) => {
        const { placa, idEmp, tipo_ambulancia } = req.body;
        const idAmb = req.params.idAmb;
        try {
          await db.query(
            'UPDATE kz_ambulancias SET placa = ?, idEmp = ?, tipo_ambulancia = ? WHERE idAmb = ?',
            [placa, idEmp, tipo_ambulancia, idAmb]
          );
          res.send({ message: 'Registro actualizado correctamente' });
        } catch (error) {
          console.error(error);
          res.status(500).send('Error al actualizar el registro');
        }
    });

    // Actualizar Estado Empleados
    router.put('/detalles/:idAmb/estado', async (req, res) => {
      const { estado } = req.body;
      const idAmb = req.params.idAmb;
      try {
        await db.query(
          'UPDATE kz_ambulancias SET estado=? WHERE idAmb=?',
          [estado, idAmb]
        );
        res.send({ message: 'Registro actualizado correctamente' });
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el registro');
      }
    });

    // Eliminar Ambulancias
     router.delete('/:idAmb', async (req, res) => {
        const idAmb = req.params.idAmb;
        try {
            await db.query(
            'DELETE FROM kz_ambulancias WHERE idAmb=?',
            [idAmb]);
            res.send({ message: 'Registro eliminado correctamente' });
        } catch (error) {
            res.status(500).send('Error al eliminaar el registro');
        }
    });

    return router;
}