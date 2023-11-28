var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var connection = require('./modules/database');
var empleadosRouter = require('./routers/empleados-router');
var menuRouter = require('./routers/menu-router');
//var fecha= new Date();

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/empleados', empleadosRouter(connection));
app.use('/inicio', menuRouter(connection));

app.listen(8888, () => {
    console.log('Servidor del backend levantado en 8888');
});
