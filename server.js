const express = require('express');
var app = express();
var path = require('path');
const port = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log('Se levantó el servidor en http://localhost:8080')
})

var reservaRouter = require('./routes/reservas.router');

app.use('/api/reserva', reservaRouter);


//---------------------PRUEBAS CON AXIOS---------------------//

//Aclaración: No sé por qué los resultados se muestran desordenados en la consola.-

//-----CARGA CORRECTA-----//
var axios = require('axios');
var data = JSON.stringify({
  "dia": 11,
  "mes": 12,
  "nombre": "Juan",
  "numero": 123123,
  "comensales": 2,
  "menues": [
    "vegano",
    "sinTacc"
  ]
});

var config = {
  method: 'post',
  url: 'http://localhost:8080/api/reserva',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function(respuesta) {
    console.log(respuesta.data);
})

//-----CARGA INCORRECTA (Hay mas menúes que personas)-----//
var axios = require('axios');
var data = JSON.stringify({
  "dia": 11,
  "mes": 12,
  "nombre": "Juan",
  "numero": 123123,
  "comensales": 2,
  "menues": [
    "vegano",
    "sinTacc",
    "omnivoro"
  ]
});

var config = {
    method: 'post',
    url: 'http://localhost:8080/api/reserva',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

axios(config)
.then(function(respuesta) {
    console.log(respuesta.data);
})

.catch(function (error){
    console.log(error.response.data);
})


//-----PEDIDO DE REPORTE DE DIVERSIDAD DE MENUES CORRECTO, DEBE MOSTRAR 1 VEGANO y 1 SIN TACC-----//

var data = JSON.stringify({
  "mes": 1
});

var config = {
  method: 'get',
  url: 'http://localhost:8080/api/reserva',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

//-----PEDIDO DE DIVERSIDAD DE MENUES INCORRECTO (MES INEXISTENTE)-----//
var data = JSON.stringify({
    "mes": 13
  });
  
  var config = {
    method: 'get',
    url: 'http://localhost:8080/api/reserva',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error.response.data);
  });

