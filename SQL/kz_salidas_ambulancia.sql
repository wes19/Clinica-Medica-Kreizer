CREATE TABLE clinicamedica_kz.kz_salidas_ambulancia (
  idSal INT NOT NULL AUTO_INCREMENT,
  idAmb INT NOT NULL, 
  nombre VARCHAR(150) NOT NULL DEFAULT 'No Identificado',
  edad                 INT          NULL,
  genero               ENUM('femenino','masculino','otro','no_especificado') NULL,
  celular_informante   VARCHAR(20)  NULL,
  estado_conciencia    ENUM('consciente','inconsciente','desconocido') NULL,
  tipo_emergencia      VARCHAR(100) NULL,
  ubicacion            TEXT         NULL,
  informacion_adicional TEXT        NULL,

  PRIMARY KEY (idSal),
  FOREIGN KEY (idAmb) REFERENCES clinicamedica_kz.kz_ambulancias (idAmb)
);