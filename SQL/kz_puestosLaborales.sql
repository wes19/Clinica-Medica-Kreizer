CREATE TABLE clinicaMedica_KZ.kz_puestosLaborales (
    idPue INT AUTO_INCREMENT PRIMARY KEY,
    idDep INT,
    nombre VARCHAR(50) NOT NULL,
    estado VARCHAR(9) NOT NULL,
    FOREIGN KEY (idDep) REFERENCES clinicaMedica_KZ.kz_empleados(idDep)
);