var express = require('express');
var router = express.Router();
const dataReservas = require('../data/reserva');


router.post('', (req, res) => {

    let reserva = {
        dia : req.body.dia,
        mes : req.body.mes,
        hora : req.body.hora,
        nombre : req.body.nombre,
        telefono : req.body.telefono,
        comensales : req.body.comensales,
        menues : req.body.menues
    }

    try {
        dataReservas.cargarReserva(reserva);
        res.status(200);
        res.json("Carga exitosa")}
    catch(error) {
        res.status(409);
        res.json(error.message);
    }



})

router.get('', (req, res) => {

    try {
        let json = dataReservas.devolverMenues(req.body.mes)
        res.status(200)
        res.json(json)
    } 

    catch(error) {
        res.status(409);
        res.json(error.message);
    }

})

module.exports = router;