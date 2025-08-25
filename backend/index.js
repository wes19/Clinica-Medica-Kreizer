var express = require('express');
var cors = require('cors');
//var bodyParser = require('body-parser');
var connection = require('./modules/database');
var empleadosRouter = require('./routers/empleados-router');
var menuRouter = require('./routers/menu-router');
var especialidadesRouter = require('./routers/especialidades-router');
var asistenciasRouter = require('./routers/asistencias-router');
var ausenciasRouter = require('./routers/ausencias-router');
var departamentosRouter = require('./routers/departamentos-router');
var puestosLaboralesRouter = require('./routers/puestosLaborales-router');
var horariosRouter = require('./routers/horarios-router');
var pacientesRouter = require('./routers/pacientes-router');
var citasRouter = require('./routers/citas-router');
var ambulanciasRouter = require('./routers/ambulancias-router');
var sesionesRouter = require('./routers/sesiones-router');

var app = express();
app.use(express.json());
app.use(cors());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use('/empleados', empleadosRouter(connection));
app.use('/inicio', menuRouter(connection));
app.use('/especialidades', especialidadesRouter(connection));
app.use('/asistencias', asistenciasRouter(connection));
app.use('/ausencias', ausenciasRouter(connection));
app.use('/departamentos', departamentosRouter(connection));
app.use('/puestos-laborales', puestosLaboralesRouter(connection));
app.use('/horarios', horariosRouter(connection));
app.use('/pacientes', pacientesRouter(connection));
app.use('/citas', citasRouter(connection));
app.use('/ambulancias', ambulanciasRouter(connection));
app.use('/sesiones', sesionesRouter(connection));

app.listen(8888, () => {
    console.log('Servidor del backend levantado en 8888');})