CREATE TABLE clinicamedica_kz.kz_sesiones (
    idSes INT AUTO_INCREMENT PRIMARY KEY,
    idEmp INT NULL,
    idEsp INT NOT NULL,
    estado TINYINT(1) NOT NULL,
    FOREIGN KEY (idEmp) REFERENCES kz_empleados(idEmp),
    FOREIGN KEY (idEsp) REFERENCES kz_especialidades(idEsp)
);
