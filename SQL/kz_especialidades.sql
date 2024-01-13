USE clinicamedica_kz;
CREATE TABLE kz_especialidades (
    idEsp INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25),
    imagen VARCHAR(255),
    estado VARCHAR(8)
);

-- Insertar datos en kz_especialidades
INSERT INTO kz_especialidades (nombre, imagen, estado) VALUES
    ('Medicina General', '../assets/img/especialidades/medicinaGeneral.png', 'Activo'),
    ('Pediatría', '../assets/img/especialidades/pediatria.png', 'Activo'),
    ('Neurología', '../assets/img/especialidades/neurologia.png', 'Activo'),
    ('Dermatología', '../assets/img/especialidades/dermatologia.png', 'Activo'),
    ('Otología', '../assets/img/especialidades/otologia.png', 'Activo'),
    ('Oftalmología', '../assets/img/especialidades/oftalmologia.png', 'Activo'),
    ('Rinología', '../assets/img/especialidades/rinologia.png', 'Activo'),
    ('Dentista', '../assets/img/especialidades/dentista.png', 'Activo'),
    ('Cardiología', '../assets/img/especialidades/cardiologia.png', 'Activo'),
    ('Hepatología', '../assets/img/especialidades/hepatologia.png', 'Activo'),
    ('Radiología', '../assets/img/especialidades/radiologia.png', 'Activo'),
    ('Neumología', '../assets/img/especialidades/neumologia.png', 'Activo'),
    ('Gastroenterología', '../assets/img/especialidades/gastroenterologia.png', 'Activo'),
    ('Urología', '../assets/img/especialidades/urologia.png', 'Activo'),
    ('Cirugía Plastica', '../assets/img/especialidades/cirugiaPlastica.png', 'Activo'),
    ('Ortopedia', '../assets/img/especialidades/ortopedia.png', 'Activo'),
    ('Ginecología', '../assets/img/especialidades/ginecologia.png', 'Activo'),
    ('Hermatología', '../assets/img/especialidades/hermatologia.png', 'Activo')

    
