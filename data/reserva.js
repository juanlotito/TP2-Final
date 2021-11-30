
const validador = require('../middleware/validate')


var reservas = [];

function cargarReserva (reserva) {
    try {
        validador.validar(reserva);
        reservas.push(reserva);
    } catch (error) {
        throw new Error(error.message)
    }
}

function devolverMenues (mes) {
    let contadorVegano = 0;
    let contadorOmnivoro = 0;
    let contadorTacc = 0;

    if (mes<1 || mes>12) {
        throw new Error ("ingresaste un mes incorrecto")
    }
    
    reservas.forEach(reserva => {
        if (reserva.mes >= mes) {       
            reserva.menues.forEach(menu => {
                if (menu == "vegano") {
                    contadorVegano++
                } else if (menu == "sinTacc") {
                    contadorTacc++
                } else {
                    contadorOmnivoro++
                }
            })
        }
    })

    return {
        contadorVegano,
        contadorTacc,
        contadorOmnivoro
    }
}






module.exports = {cargarReserva, devolverMenues}