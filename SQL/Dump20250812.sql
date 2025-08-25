-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: clinicamedica_kz
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `kz_ambulancias`
--

DROP TABLE IF EXISTS `kz_ambulancias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kz_ambulancias` (
  `idAmb` int NOT NULL AUTO_INCREMENT,
  `placa` varchar(7) DEFAULT NULL,
  `idEmp` int DEFAULT NULL,
  `tipo_ambulancia` varchar(50) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idAmb`),
  KEY `idEmp` (`idEmp`),
  CONSTRAINT `kz_ambulancias_ibfk_1` FOREIGN KEY (`idEmp`) REFERENCES `kz_empleados` (`idEmp`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kz_ambulancias`
--

LOCK TABLES `kz_ambulancias` WRITE;
/*!40000 ALTER TABLE `kz_ambulancias` DISABLE KEYS */;
INSERT INTO `kz_ambulancias` VALUES (1,'HBO2324',4,'prueba',1),(2,'QWE1234',NULL,'Ambulancia Básica gv',1),(3,'fed3467',1,'Ambulancia de Cuidados Intensivos',1);
/*!40000 ALTER TABLE `kz_ambulancias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kz_citas`
--

DROP TABLE IF EXISTS `kz_citas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kz_citas` (
  `idCita` int NOT NULL AUTO_INCREMENT,
  `idPac` int DEFAULT NULL,
  `idHora` int DEFAULT NULL,
  `fecha_cita` date DEFAULT NULL,
  `estado` varchar(11) NOT NULL DEFAULT 'Pendiente',
  `prioridad` int NOT NULL DEFAULT '3',
  `fecha_confirmacion` datetime DEFAULT NULL,
  PRIMARY KEY (`idCita`),
  KEY `fk_citas_pacientes` (`idPac`),
  KEY `fk_citas_horarios` (`idHora`),
  CONSTRAINT `fk_citas_horarios` FOREIGN KEY (`idHora`) REFERENCES `kz_horarios` (`idHora`),
  CONSTRAINT `fk_citas_pacientes` FOREIGN KEY (`idPac`) REFERENCES `kz_pacientes` (`idPac`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kz_citas`
--

LOCK TABLES `kz_citas` WRITE;
/*!40000 ALTER TABLE `kz_citas` DISABLE KEYS */;
/*!40000 ALTER TABLE `kz_citas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kz_departamentos`
--

DROP TABLE IF EXISTS `kz_departamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kz_departamentos` (
  `idDep` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idDep`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kz_departamentos`
--

LOCK TABLES `kz_departamentos` WRITE;
/*!40000 ALTER TABLE `kz_departamentos` DISABLE KEYS */;
INSERT INTO `kz_departamentos` VALUES (1,'Departamento 1',1),(2,'Departamento 2',1),(3,'Departamento 3',1),(4,'Logistica',1),(5,'prueba 2',1),(6,'dede',1),(7,'ewfew',1);
/*!40000 ALTER TABLE `kz_departamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kz_empleados`
--

DROP TABLE IF EXISTS `kz_empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kz_empleados` (
  `idEmp` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `identidad` varchar(13) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `celular` varchar(15) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `genero` varchar(10) DEFAULT NULL,
  `celular_emergencias` varchar(15) DEFAULT NULL,
  `nombre_contacto_emergencia` varchar(100) DEFAULT NULL,
  `estado_civil` varchar(10) DEFAULT NULL,
  `conyugue` varchar(100) DEFAULT NULL,
  `numero_hijos` int DEFAULT NULL,
  `nacionalidad` varchar(15) DEFAULT NULL,
  `idiomas` varchar(50) DEFAULT NULL,
  `nivel_certificado` varchar(20) DEFAULT NULL,
  `campo_estudio` varchar(30) DEFAULT NULL,
  `escuela_superior` varchar(35) DEFAULT NULL,
  `escuela_media` varchar(30) DEFAULT NULL,
  `escuela` varchar(30) DEFAULT NULL,
  `pais` varchar(30) DEFAULT NULL,
  `departamento` varchar(30) DEFAULT NULL,
  `direccion` varchar(250) DEFAULT NULL,
  `celular_laboral` varchar(15) DEFAULT NULL,
  `correo_laboral` varchar(30) DEFAULT NULL,
  `jefe_inmediato` varchar(50) DEFAULT NULL,
  `direccion_laboral` varchar(250) DEFAULT NULL,
  `aprobador` varchar(50) DEFAULT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  `salario` float DEFAULT NULL,
  `idPue` int DEFAULT NULL,
  `PIN` int DEFAULT NULL,
  `contrasena` varchar(30) DEFAULT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  `imagen` varchar(255) DEFAULT NULL,
  `id_credencial` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`idEmp`),
  KEY `idPue` (`idPue`),
  CONSTRAINT `kz_empleados_ibfk_1` FOREIGN KEY (`idPue`) REFERENCES `kz_puestoslaborales` (`idPue`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kz_empleados`
--

LOCK TABLES `kz_empleados` WRITE;
/*!40000 ALTER TABLE `kz_empleados` DISABLE KEYS */;
INSERT INTO `kz_empleados` VALUES (1,'Juan','Pérez','1234567890123','1990-05-15','123456789','juan.perez@email.com','Masculino','987654321','María Pérez','Casado','María Pérez',2,'Mexicana','Español, Inglés','Avanzado','Ingeniería Informática','Universidad Tecnológica','Preparatoria XYZ','Escuela XYZ','México','Ciudad de México','Calle 123, Colonia ABC','987654321','juan.perez@trabajo.com','Ana García','123 Calle Principal, Colonia Trabajo','Laura Martínez','2022-01-10',60000,5,1234,'contraseña1',1,NULL,'1234567890'),(2,'Ana','García','1234567890123','1985-08-20','987654321','ana.garcia@email.com','Femenino','123456789','Juan García','Soltero',NULL,0,'Mexicana','Español, Francés','Intermedio','Psicología','Universidad Nacional','Preparatoria ABC','Escuela ABC','México','Ciudad de México','Calle 456, Colonia XYZ','987654321','ana.garcia@trabajo.com','Laura Martínez','456 Calle Secundaria, Colonia Trabajo','Juan Pérez','2021-03-05',55000,2,5678,'contraseña2',1,NULL,'1234567898'),(3,'Laura','Martínez','1234567890123','1992-12-10','876543210','laura.martinez@email.com','Femenino','567890123','Carlos Martínez','Casado','Carlos Martínez',1,'Colombiana','Español, Inglés','Avanzado','Medicina','Universidad de Bogotá','Colegio XYZ','Escuela XYZ','Colombia','Bogotá','Carrera 789, Barrio DEF','876543210','laura.martinez@trabajo.com','Juan Pérez','789 Calle Principal, Barrio Trabajo','Ana García','2020-06-15',70000,3,9012,'contraseña3',1,NULL,'1234522890'),(4,'Wesly ','Canales',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,5,NULL,NULL,1,NULL,NULL),(5,'Wesly Lazo',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL),(6,'Wesly Lazo',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL),(7,NULL,NULL,'0801199718290',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL);
/*!40000 ALTER TABLE `kz_empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kz_especialidades`
--

DROP TABLE IF EXISTS `kz_especialidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kz_especialidades` (
  `idEsp` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idEsp`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kz_especialidades`
--

LOCK TABLES `kz_especialidades` WRITE;
/*!40000 ALTER TABLE `kz_especialidades` DISABLE KEYS */;
INSERT INTO `kz_especialidades` VALUES (1,'Medicina General','../assets/img/especialidades/medicinaGeneral.png',1),(4,'Dermatología','../assets/img/especialidades/dermatologia.png',1),(5,'Otología','../assets/img/especialidades/otologia.png',1),(6,'Oftalmología','../assets/img/especialidades/oftalmologia.png',1),(7,'Rinología','../assets/img/especialidades/rinologia.png',1),(8,'Dentista','../assets/img/especialidades/dentista.png',1),(9,'Cardiología','../assets/img/especialidades/cardiologia.png',1),(10,'Hepatología','../assets/img/especialidades/hepatologia.png',1);
/*!40000 ALTER TABLE `kz_especialidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kz_horarios`
--

DROP TABLE IF EXISTS `kz_horarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kz_horarios` (
  `idHora` int NOT NULL AUTO_INCREMENT,
  `idEsp` int DEFAULT NULL,
  `idEmp` int DEFAULT NULL,
  `hora_inicio` time DEFAULT NULL,
  `hora_final` time DEFAULT NULL,
  `lun` tinyint(1) DEFAULT NULL,
  `mar` tinyint(1) DEFAULT NULL,
  `mie` tinyint(1) DEFAULT NULL,
  `jue` tinyint(1) DEFAULT NULL,
  `vie` tinyint(1) DEFAULT NULL,
  `sab` tinyint(1) DEFAULT NULL,
  `dom` tinyint(1) DEFAULT NULL,
  `cupos` int DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idHora`),
  KEY `idEsp` (`idEsp`),
  KEY `idEmp` (`idEmp`),
  CONSTRAINT `kz_horarios_ibfk_1` FOREIGN KEY (`idEsp`) REFERENCES `kz_especialidades` (`idEsp`),
  CONSTRAINT `kz_horarios_ibfk_2` FOREIGN KEY (`idEmp`) REFERENCES `kz_empleados` (`idEmp`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kz_horarios`
--

LOCK TABLES `kz_horarios` WRITE;
/*!40000 ALTER TABLE `kz_horarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `kz_horarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kz_menu`
--

DROP TABLE IF EXISTS `kz_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kz_menu` (
  `idMenu` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `url` varchar(1000) DEFAULT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idMenu`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kz_menu`
--

LOCK TABLES `kz_menu` WRITE;
/*!40000 ALTER TABLE `kz_menu` DISABLE KEYS */;
INSERT INTO `kz_menu` VALUES (1,'Citas','../assets/img/icons/citas.png','/citas',1),(2,'Portal Medico','../assets/img/icons/portal.png','/portal-medico',1),(3,'Administracion','../assets/img/icons/administracion.png','/administracion',1),(4,'R.R.H.H.','../assets/img/icons/recursosHumanos.png','/rrhhefwew',1),(5,'Asistencias','../assets/img/icons/asistencia.png','/asistencias',1),(6,'Ausencias','../assets/img/icons/ausencia.png','/ausencias',1);
/*!40000 ALTER TABLE `kz_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kz_pacientes`
--

DROP TABLE IF EXISTS `kz_pacientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kz_pacientes` (
  `idPac` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `identidad` varchar(13) DEFAULT NULL,
  `celular` varchar(15) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `RTN` varchar(14) DEFAULT NULL,
  `genero` varchar(10) DEFAULT NULL,
  `pais` varchar(30) DEFAULT NULL,
  `departamento` varchar(30) DEFAULT NULL,
  `direccion` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`idPac`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kz_pacientes`
--

LOCK TABLES `kz_pacientes` WRITE;
/*!40000 ALTER TABLE `kz_pacientes` DISABLE KEYS */;
INSERT INTO `kz_pacientes` VALUES (3,'Pedro Ramirez','0301198001234','7777-7777','pedro.ramirez@example.com','1980-01-03','0301198001234','Masculino','Honduras','Atlántida','Colonia El Porvenir, La Ceiba'),(4,'Wesly','0801199718290','98998787','wesly@gmail.com','2000-08-19','08011997182920','Masculino','Honduras','FM','rs cme'),(5,'Teresa','0801199718291','98998787','wesly@gmail.com','1997-11-16','08011997182920','Femenino','Honduras','FM','jiji'),(6,'Teresa Vasquez','0801199718292','98998787','wesly@gmail.com','1997-11-16','08011997182920','Femenino','Honduras','FM','jiji'),(8,'Wesly Lazo','0801199718293','98998787',NULL,'1997-11-19',NULL,'Masculino',NULL,NULL,NULL),(9,'Wesly Lazo','0801199718293','98998787',NULL,'1997-09-11',NULL,'Masculino',NULL,NULL,NULL),(11,'Testing 2','0801199718290','98998787','wesly1@gmail.com','2004-06-09','08011997182920','Femenino','Honduras','FM',NULL),(12,'Testing 3','0801199718299','98998787','wesly11@gmail.com','1987-10-10','08011997182999','Femenino','Honduras','FM','test');
/*!40000 ALTER TABLE `kz_pacientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kz_puestoslaborales`
--

DROP TABLE IF EXISTS `kz_puestoslaborales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kz_puestoslaborales` (
  `idPue` int NOT NULL AUTO_INCREMENT,
  `idDep` int DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idPue`),
  KEY `idDep` (`idDep`),
  CONSTRAINT `kz_puestoslaborales_ibfk_1` FOREIGN KEY (`idDep`) REFERENCES `kz_departamentos` (`idDep`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kz_puestoslaborales`
--

LOCK TABLES `kz_puestoslaborales` WRITE;
/*!40000 ALTER TABLE `kz_puestoslaborales` DISABLE KEYS */;
INSERT INTO `kz_puestoslaborales` VALUES (1,1,'Puesto 1',1),(2,2,'Puesto 2',1),(3,3,'Puesto 3',1),(4,2,'Prueba 1',1),(5,4,'Conductor',1),(6,2,'wqdwq',1),(7,1,'eddeedwewdewdedwewd',1),(8,5,'wqwqd',1),(9,4,'wqwqd',1);
/*!40000 ALTER TABLE `kz_puestoslaborales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kz_salidas_ambulancia`
--

DROP TABLE IF EXISTS `kz_salidas_ambulancia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kz_salidas_ambulancia` (
  `idSal` int NOT NULL AUTO_INCREMENT,
  `idAmb` int NOT NULL,
  `nombre` varchar(150) NOT NULL DEFAULT 'No Identificado',
  `edad` int DEFAULT NULL,
  `genero` enum('femenino','masculino','otro','no_especificado') DEFAULT NULL,
  `celular_informante` varchar(20) DEFAULT NULL,
  `estado_conciencia` enum('consciente','inconsciente','desconocido') DEFAULT NULL,
  `tipo_emergencia` varchar(100) DEFAULT NULL,
  `ubicacion` text,
  `informacion_adicional` text,
  PRIMARY KEY (`idSal`),
  KEY `idAmb` (`idAmb`),
  CONSTRAINT `kz_salidas_ambulancia_ibfk_1` FOREIGN KEY (`idAmb`) REFERENCES `kz_ambulancias` (`idAmb`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kz_salidas_ambulancia`
--

LOCK TABLES `kz_salidas_ambulancia` WRITE;
/*!40000 ALTER TABLE `kz_salidas_ambulancia` DISABLE KEYS */;
INSERT INTO `kz_salidas_ambulancia` VALUES (1,3,'test',84,'femenino','98989898','consciente','Accidente Automovilístico','test','test');
/*!40000 ALTER TABLE `kz_salidas_ambulancia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-12 21:31:06
