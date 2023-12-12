CREATE TABLE clinicaMedica_KZ.kz_departamentos (
    idDep INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    estado VARCHAR(9) NOT NULL
);

-- Insertar registros de ejemplo
INSERT INTO clinicaMedica_KZ.kz_departamentos (nombre, estado) 
VALUES
    ('Departamento 1', 'Activo'),
    ('Departamento 2', 'Inactivo'),
    ('Departamento 3', 'Activo');