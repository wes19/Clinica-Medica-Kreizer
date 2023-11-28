USE clinicamedica_kz;
CREATE TABLE kz_especialidades (
    idEspecialidades INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25),
    imagen VARCHAR(100),
    estado VARCHAR(8)
);

-- Insertar datos en kz_especialidades
INSERT INTO kz_especialidades (nombre, imagen, url, estado) VALUES
    ('Medicina General', '../assets/img/especialidades/medicinaGeneral.png', 'Activo'),
    ('Pediatría', '"../assets/img/especialidades/pediatria.pngg', 'Activo'),
    ('Neurología', '../assets/img/especialidades/neurologia.pngg', 'Activo'),
    ('Dermatología', '../assets/img/especialidades/dermatologia.png', 'Activo'),
    ('Otología', '../assets/img/especialidades/otologia.png', 'Activo'),
    ('Oftalmología', '../assets/img/especialidades/oftalmologia.png', 'Activo');
