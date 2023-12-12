CREATE TABLE clinicaMedica_KZ.kz_ausencias (
    idAus INT AUTO_INCREMENT PRIMARY KEY,
    idEmp INT,
    tipoAusencia VARCHAR(50) NOT NULL,
    desde DATETIME NOT NULL,
    hasta DATETIME NOT NULL,
    horas TIME,
    dias INT,
    descripcion VARCHAR(255),
    estado VARCHAR(9),
    FOREIGN KEY (idEmp) REFERENCES clinicaMedica_KZ.kz_empleados(idEmp)
);

INSERT INTO clinicaMedica_KZ.kz_ausencias (idEmp, tipoAusencia, desde, hasta, horas, dias, descripcion, estado)
VALUES
  (1, 'Vacaciones', '2023-01-01 08:00:00', '2023-01-05 17:00:00', '40:00:00', 5, 'Vacaciones de Año Nuevo', 'Ninguno'),
  (2, 'Enfermedad', '2023-02-10 09:30:00', '2023-02-10 16:30:00', '07:00:00', 1, 'Resfriado', 'Ninguno'),
  (3, 'Asuntos Personales', '2023-03-20 13:00:00', '2023-03-20 18:00:00', '05:00:00', 1, 'Asuntos familiares', 'Ninguno');
