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
          nombre, apellidos, fecha_nacimiento, celular, correo, genero, celular_emergencias, nombre_contacto_emergencia,
          estado_civil, conyugue, numero_hijos, nacionalidad, idiomas, nivel_certificcado, campo_estudio, escuela_superior,
          escuela_media, escuela, pais, departamento, direccion, celular_laboral, correo_laboral, area, jefe_inmediato,
          direccion_laboral, aprobador, fecha_ingreso, salario, puesto_laboral, PIN, contrasena, estado, imagen
        } = req.body;
        const idEmp = req.params.idEmp;
    
        try {
          await db.query(
            'UPDATE kz_empleados SET nombre=?, apellidos=?, fecha_nacimiento=?, celular=?, correo=?, genero=?, celular_emergencias=?, nombre_contacto_emergencia=?, estado_civil=?, conyugue=?, numero_hijos=?, nacionalidad=?, idiomas=?, nivel_certificcado=?, campo_estudio=?, escuela_superior=?, escuela_media=?, escuela=?, pais=?, departamento=?, direccion=?, celular_laboral=?, correo_laboral=?, area=?, jefe_inmediato=?, direccion_laboral=?, aprobador=?, fecha_ingreso=?, salario=?, puesto_laboral=?, PIN=?, contrasena=?, estado=?, imagen=? WHERE idEmp=?',
            [
              nombre, apellidos, fecha_nacimiento, celular, correo, genero, celular_emergencias, nombre_contacto_emergencia, estado_civil,
              conyugue, numero_hijos, nacionalidad, idiomas, nivel_certificcado, campo_estudio, escuela_superior, escuela_media, escuela,
              pais, departamento, direccion, celular_laboral, correo_laboral, area, jefe_inmediato, direccion_laboral, aprobador,
              fecha_ingreso, salario, puesto_laboral, PIN, contrasena, estado, imagen, idEmp
            ]
          );
          res.send({ message: 'Registro actualizado correctamente' });
        } catch (error) {
          console.error(error);
          res.status(500).send('Error al actualizar el registro');
        }
      });
  
    return router;
};
