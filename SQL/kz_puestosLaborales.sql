CREATE TABLE clinicaMedica_KZ.kz_puestosLaborales (
    idPue INT AUTO_INCREMENT PRIMARY KEY,
    idDep INT,
    nombre VARCHAR(50) NOT NULL,
    estado VARCHAR(9) NOT NULL,
    FOREIGN KEY (idDep) REFERENCES clinicaMedica_KZ.kz_departamentos(idDep)
);

INSERT INTO clinicaMedica_KZ.kz_puestosLaborales (idDep, nombre, estado) 
VALUES
    (1, 'Puesto 1', 'Activo'),
    (2, 'Puesto 2', 'Inactivo'),
    (3, 'Puesto 3', 'Activo');