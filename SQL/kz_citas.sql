USE clinicamedica_kz;
CREATE TABLE kz_citas (
    idCita INT AUTO_INCREMENT PRIMARY KEY,
    idPac INT,
    idHora INT,
    fecha_cita DATE,
    estado VARCHAR(10)
);