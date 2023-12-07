CREATE TABLE clinicaMedica_KZ.kz_empleados (
    idEmpleados INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellidos VARCHAR(50),
    fecha_nacimiento DATE,
    celular VARCHAR(15),
    correo VARCHAR(50),
    genero VARCHAR(10),
    celular_emergencias VARCHAR(15),
    nombre_contacto_emergencia VARCHAR(100),
    estado_civil VARCHAR(10),
    conyugue VARCHAR(100),
    numero_hijos INT,
    nacionalidad VARCHAR(15),
    idiomas VARCHAR(50),
    nivel_certificcado VARCHAR(20),
    campo_estudio VARCHAR(30),
    escuela_superior VARCHAR(35),
    escuela_media VARCHAR(30),
    escuela VARCHAR(30),
    pais VARCHAR(30),
    departamento VARCHAR(30),
    direccion VARCHAR(250),
    celular_laboral VARCHAR(15),
    correo_laboral VARCHAR(30),
    area VARCHAR(30),
    jefe_inmediato VARCHAR(50),
    direccion_laboral VARCHAR(250),
    aprobador VARCHAR(50),
    fecha_ingreso DATE,
    salario FLOAT,
    puesto_laboral VARCHAR(30),
    PIN INT,
    contrasena VARCHAR(30),
    estado VARCHAR(8),
    imagen BLOB
);

USE clinicamedica_KZ;
INSERT INTO clinicaMedica_KZ.kz_empleados (nombre, apellidos, fecha_nacimiento, celular, correo, genero, celular_emergencias, nombre_contacto_emergencia, estado_civil, conyugue, numero_hijos, nacionalidad, idiomas, nivel_certificcado, campo_estudio, escuela_superior, escuela_media, escuela, pais, departamento, direccion, celular_laboral, correo_laboral, area, jefe_inmediato, direccion_laboral, aprobador, fecha_ingreso, salario, puesto_laboral, PIN, contrasena, estado, imagen)
VALUES
('Juan', 'Pérez', '1990-05-15', '123456789', 'juan.perez@email.com', 'Masculino', '987654321', 'María Pérez', 'Casado', 'María Pérez', 2, 'Mexicana', 'Español, Inglés', 'Avanzado', 'Ingeniería Informática', 'Universidad Tecnológica', 'Preparatoria XYZ', 'Escuela XYZ', 'México', 'Ciudad de México', 'Calle 123, Colonia ABC', '987654321', 'juan.perez@trabajo.com', 'Desarrollo de Software', 'Ana García', '123 Calle Principal, Colonia Trabajo', 'Laura Martínez', '2022-01-10', 60000.00, 'Desarrollador Senior', 1234, 'contraseña1', 'Activo', NULL),
('Ana', 'García', '1985-08-20', '987654321', 'ana.garcia@email.com', 'Femenino', '123456789', 'Juan García', 'Soltero', NULL, 0, 'Mexicana', 'Español, Francés', 'Intermedio', 'Psicología', 'Universidad Nacional', 'Preparatoria ABC', 'Escuela ABC', 'México', 'Ciudad de México', 'Calle 456, Colonia XYZ', '987654321', 'ana.garcia@trabajo.com', 'Recursos Humanos', 'Laura Martínez', '456 Calle Secundaria, Colonia Trabajo', 'Juan Pérez', '2021-03-05', 55000.00, 'Especialista en RRHH', 5678, 'contraseña2', 'Activo', NULL),
('Laura', 'Martínez', '1992-12-10', '876543210', 'laura.martinez@email.com', 'Femenino', '567890123', 'Carlos Martínez', 'Casado', 'Carlos Martínez', 1, 'Colombiana', 'Español, Inglés', 'Avanzado', 'Medicina', 'Universidad de Bogotá', 'Colegio XYZ', 'Escuela XYZ', 'Colombia', 'Bogotá', 'Carrera 789, Barrio DEF', '876543210', 'laura.martinez@trabajo.com', 'Médico General', 'Juan Pérez', '789 Calle Principal, Barrio Trabajo', 'Ana García', '2020-06-15', 70000.00, 'Médico Principal', 9012, 'contraseña3', 'Activo', NULL);

