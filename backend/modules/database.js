var mysql = require('mysql2');

class Database {
    constructor() {
        // Conexión Base de Datos
        this.connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '1234',
            database: 'clinicamedica_KZ'
        });

        // Verificación Conexión Bases de Datos
        this.connection.connect(function (err) {
            if (err) {
                console.error('ERROR AL CONECTARSE A LA BASE DE DATOS: ', err);
                return;
            } else {
                console.log('CONEXION EXITOSA');
            }
        });
    }

    // Método para realizar consultas en la base de datos
    query(sql, callback) {
        this.connection.query(sql, callback);
    }
}

module.exports = new Database();
