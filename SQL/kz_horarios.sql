USE clinicamedica_kz;
CREATE TABLE kz_horarios (
    idHora INT AUTO_INCREMENT PRIMARY KEY,
    idEsp INT,
    idEmp INT,
    hora_inicio TIME,
    hora_final TIME,
    lun BOOLEAN,
    mar BOOLEAN,
    mie BOOLEAN,
    jue BOOLEAN,
    vie BOOLEAN,
    sab BOOLEAN,
    dom BOOLEAN,
    estado BOOLEAN
);

-- Insertar datos en kz_horarios
INSERT INTO kz_horarios (idEsp, idEmp, hora_inicio, hora_final, lun, mar, mie, jue, vie, sab, dom, estado) VALUES
    (1, 1, '08:00:00', '12:00:00', true, true, true, true, true, false, false, true),
    (2, 2, '09:30:00', '13:30:00', true, true, true, true, true, true, false, false),
    (3, 3, '14:00:00', '18:00:00', false, false, false, false, false, true, true, true);


    