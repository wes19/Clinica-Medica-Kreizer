USE clinicamedica_kz;
CREATE TABLE kz_menu (
    idMenu INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25),
    imagen VARCHAR(100),
    url VARCHAR(1000),
    estado VARCHAR(8)
);

INSERT INTO clinicaMedica_KZ.kz_menu (nombre, imagen, url, estado) VALUES
    ('Citas', '../assets/img/icons/citas.png', '/citas', 'Activo'),
    ('Portal Medico', '../assets/img/icons/portal.png', '/portal-medico', 'Activo'),
    ('Administracion', '../assets/img/icons/administracion.png', '/administracion', 'Activo'),
    ('R.R.H.H.', '../assets/img/icons/recursosHumanos.png', '/rrhh', 'Activo'),
    ('Asistencias', '../assets/img/icons/asistencia.png', '/asistencias', 'Activo'),
    ('Ausencias', '../assets/img/icons/ausencia.png', '/ausencias', 'Activo');
