let menues = ["vegano", "omnivoro", "sinTacc"];

function validar (reserva) {
    validarDia(reserva.dia);
    validarMes(reserva.mes);
    validarHora(reserva.hora);
    validarNombre(reserva.nombre);
    validarTelefono(reserva.telefono);
    validarComensales(reserva.comensales);
    validarMenues(reserva.comensales, reserva.menues);
}

function validarDia(dia) {
    if (dia<1 || dia>31) {
        throw new Error ("El día es incorrecto")
    }
}

function validarMes(mes) {
    if (mes<1 || mes > 12 ) {
        throw new Error ("El mes es incorrecto")
    }
}

function validarHora(hora) {
    if (hora<0 || hora>23) {
        throw new Error ("La hora es incorrecta")
    }
}

function validarNombre (nombre) {

    //No encontré como validar que no haya números en esta cadena

}

function validarTelefono(telefono) {

    //No encontré la forma de validar que no haya letras en esta cadena

}

function validarComensales(comensales) {
    if (comensales<0) {
        throw new Error("Cantidad de comensales incorrecta")
    }
}

function validarMenues (comensales, menues) {
    if (menues.length == comensales) {
        menues.forEach(element => {
            if (element != "vegano" && element != "omnivoro" && element != "sinTacc") {
                throw new Error ("Ingresaste un menú incorrecto")
            }
        })
    } else {
        throw new Error ("Ingresaste una cantidad de menúes diferente a la cantidad de comensales")
    }
}

module.exports = {validar}