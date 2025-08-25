SHOW TRIGGERS;

DROP TRIGGER IF EXISTS clinicamedica_kz.tr_update_empleado_relaciones;

USE clinicamedica_kz;
DELIMITER $$
CREATE TRIGGER tr_update_empleado_relaciones
AFTER UPDATE ON kz_empleados
FOR EACH ROW
BEGIN
  IF NEW.estado = 0 THEN
    -- Liberar ambulancia
    UPDATE kz_ambulancias
    SET idEmp = NULL
    WHERE idEmp = NEW.idEmp;

    -- Liberar horarios
    UPDATE kz_horarios
    SET idEmp = NULL
    WHERE idEmp = NEW.idEmp;
    
	-- Liberar Sesiones
    UPDATE kz_sesiones
    SET idEmp = NULL
    WHERE idEmp = NEW.idEmp;
  END IF;
END$$
DELIMITER ;





