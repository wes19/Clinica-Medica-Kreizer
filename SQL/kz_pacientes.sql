CREATE TABLE clinicaMedica_KZ.kz_pacientes (
    idPac INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    identidad VARCHAR(13),
    celular VARCHAR(15),
    correo VARCHAR(50),
    fecha_nacimiento DATE,
	RTN VARCHAR(14),
    genero INT,
    pais VARCHAR(30),
    departamento VARCHAR(30),
    direccion VARCHAR(250)
);

INSERT INTO clinicaMedica_KZ.kz_pacientes (nombre, identidad, celular, correo, fecha_nacimiento, RTN, genero, pais, departamento, direccion)
VALUES 
('Juan Perez', '0801198501234', '9999-9999', 'juan.perez@example.com', '1985-01-08', '0801198501234', 1, 'Honduras', 'Cortés', 'Colonia Altamira, San Pedro Sula'),
('Maria Lopez', '0501199001234', '8888-8888', 'maria.lopez@example.com', '1990-01-05', '0501199001234', 0, 'Honduras', 'Francisco Morazán', 'Barrio La Ronda, Tegucigalpa'),
('Pedro Ramirez', '0301198001234', '7777-7777', 'pedro.ramirez@example.com', '1980-01-03', '0301198001234', 1, 'Honduras', 'Atlántida', 'Colonia El Porvenir, La Ceiba');
