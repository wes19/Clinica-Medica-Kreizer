var express = require('express');
var router = express.Router();
var pacientes = require('../models/pacientes');
var mongoose = require('mongoose');


//ANADIR PACIENTES
router.post('/', function(req, res) {
    let x = new usuario({
        nombre: req.body.nombre,
        apellido: req.body.telefono,
        correo: req.body.correo,
        telefono: req.body.contrasenia,
        direccion: [],
        factura: []
    })
    u.save()
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
})

module.exports = router;