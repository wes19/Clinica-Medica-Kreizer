USE clinicamedica_kz;
CREATE TABLE kz_citas (
    idCita INT AUTO_INCREMENT PRIMARY KEY,
    idPac INT,
    idHora INT,
    estado VARCHAR(15)
);

-- Insertar datos en kz_citas
INSERT INTO kz_citas (idPac, idHora, estado) VALUES
    (1, 1, 'Activo'),
    (2, 2, 'Activo'),
    (3, 3, 'Activo');

    