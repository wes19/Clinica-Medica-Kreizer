USE clinicamedica_kz;
CREATE TABLE kz_pacientes (
    idPac INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellidos VARCHAR(50),
    identidad VARCHAR(13),
    celular VARCHAR(15),
	fecha_nacimiento DATE,
	genero VARCHAR(10),
    estado VARCHAR(8)
);

-- Insertar datos en kz_pacientes
INSERT INTO kz_pacientes (nombre, apellidos, identidad, celular, fecha_nacimiento, genero, estado) VALUES
    ('Juan', 'Perez', '080119950001', '987654321', '1995-01-08', 'Masculino', 'Activo'),
    ('Maria', 'Gomez', '050519920002', '123456789', '1992-05-05', 'Femenino', 'Activo'),
    ('Carlos', 'Rodriguez', '102319900003', '555555555', '1990-10-23', 'Masculino', 'Activo');
