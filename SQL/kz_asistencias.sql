CREATE TABLE clinicaMedica_KZ.kz_asistencias (
    idAsi INT AUTO_INCREMENT PRIMARY KEY,
    idEmp INT,
    entrada DATETIME,
    salida DATETIME,
    horas_trabajadas TIME,
    FOREIGN KEY (idEmp) REFERENCES clinicaMedica_KZ.kz_empleados(idEmp)
);

INSERT INTO clinicaMedica_KZ.kz_asistencias (
    idEmp, entrada, salida, horas_trabajadas
) VALUES 
    (1, '2023-10-25 08:50:09', '2023-10-25 18:20:59', '08:55'),
    (2, '2023-10-25 08:50:09', '2023-10-25 18:20:59', '08:55'),
    (3, '2023-10-25 08:50:09', '2023-10-25 18:20:59', '08:55'),
    (1, '2023-10-25 08:50:09', '2023-10-25 18:20:59', '08:55');
