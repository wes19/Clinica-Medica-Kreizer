var express = require('express');
var router = express.Router();

// Obtener Empleados
module.exports = function (db) {
    // Obtener empleados
    router.get('/lista', async (req, res) => {
        try {
            const results = await db.query('SELECT * FROM kz_empleados');
            res.send(results);
        } catch (error) {
            res.status(500).send('Error al realizar la consulta');
        }
    });

    // Actualizar Empleados
    router.put('/detalles/:idEmp', async (req, res) => {
        const {
          nombre, apellidos, identidad, fecha_nacimiento, celular, correo, genero, celular_emergencias, nombre_contacto_emergencia,
          estado_civil, conyugue, numero_hijos, nacionalidad, idiomas, nivel_certificado, campo_estudio, escuela_superior,
          escuela_media, escuela, pais, departamento, direccion, celular_laboral, correo_laboral, area, jefe_inmediato,
          direccion_laboral, aprobador, fecha_ingreso, salario, idPue, PIN, contrasena, estado, imagen, id_credencial
        } = req.body;
        const idEmp = req.params.idEmp;
    
        try {
          await db.query(
            'UPDATE kz_empleados SET nombre=?, apellidos=?, identidad=?, fecha_nacimiento=?, celular=?, correo=?, genero=?, celular_emergencias=?, nombre_contacto_emergencia=?, estado_civil=?, conyugue=?, numero_hijos=?, nacionalidad=?, idiomas=?, nivel_certificado=?, campo_estudio=?, escuela_superior=?, escuela_media=?, escuela=?, pais=?, departamento=?, direccion=?, celular_laboral=?, correo_laboral=?, area=?, jefe_inmediato=?, direccion_laboral=?, aprobador=?, fecha_ingreso=?, salario=?, idPue=?, PIN=?, contrasena=?, estado=?, imagen=?, id_credencial=? WHERE idEmp=?',
            [
              nombre, apellidos, identidad, fecha_nacimiento, celular, correo, genero, celular_emergencias, nombre_contacto_emergencia, estado_civil,
              conyugue, numero_hijos, nacionalidad, idiomas, nivel_certificado, campo_estudio, escuela_superior, escuela_media, escuela,
              pais, departamento, direccion, celular_laboral, correo_laboral, area, jefe_inmediato, direccion_laboral, aprobador,
              fecha_ingreso, salario, idPue, PIN, contrasena, estado, imagen, id_credencial, idEmp
            ]
          );
          res.send({ message: 'Registro actualizado correctamente' });
        } catch (error) {
          console.error(error);
          res.status(500).send('Error al actualizar el registro');
        }
      });
  
    // Actualizar Estado Empleados
    router.put('/detalles/:idEmp/estado', async (req, res) => {
      const {
       estado
      } = req.body;
      const idEmp = req.params.idEmp;
  
      try {
        await db.query(
          'UPDATE kz_empleados SET estado=? WHERE idEmp=?',
          [estado, idEmp]
        );
        res.send({ message: 'Registro actualizado correctamente' });
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el registro');
      }
    });

     // Guardar Empleados
    router.post('/crear', async (req, res) => {
      const {
        nombre, apellidos, identidad, fecha_nacimiento, celular, correo, genero, celular_emergencias, nombre_contacto_emergencia,
        estado_civil, conyugue, numero_hijos, nacionalidad, idiomas, nivel_certificado, campo_estudio, escuela_superior,
        escuela_media, escuela, pais, departamento, direccion, celular_laboral, correo_laboral, area, jefe_inmediato,
        direccion_laboral, aprobador, fecha_ingreso, salario, idPue, PIN, contrasena, estado, imagen, id_credencial
      } = req.body;
      const query = 'INSERT INTO kz_empleados (nombre, apellidos, identidad, fecha_nacimiento, celular, correo, genero, celular_emergencias, nombre_contacto_emergencia, estado_civil, conyugue, numero_hijos, nacionalidad, idiomas, nivel_certificado, campo_estudio, escuela_superior, escuela_media, escuela, pais, departamento, direccion, celular_laboral, correo_laboral, area, jefe_inmediato, direccion_laboral, aprobador, fecha_ingreso, salario, idPue, PIN, contrasena, estado, imagen, id_credencial) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      try {
          await db.query(query, [nombre, apellidos, identidad, fecha_nacimiento, celular, correo, genero, celular_emergencias, nombre_contacto_emergencia,
            estado_civil, conyugue, numero_hijos, nacionalidad, idiomas, nivel_certificado, campo_estudio, escuela_superior,
            escuela_media, escuela, pais, departamento, direccion, celular_laboral, correo_laboral, area, jefe_inmediato,
            direccion_laboral, aprobador, fecha_ingreso, salario, idPue, PIN, contrasena, estado, imagen, id_credencial]);
          res.status(201).json({ message: 'Departamento guardado exitosamente'});
      } catch (error) {
          res.status(500).json({ error: 'Error al realizar la inserción' });
      }
    });

  return router;
};
