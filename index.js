//Importando la herramienta
const express = require('express')
const app = express()

//Atendiendo peticiones
app.post('/api/habitaciones', function (req, res) {
  res.send('Estoy guardando una habitacion')
})

app.get('/api/habitaciones', function (req, res) {
  res.send('Estoy buscando todas las habitaciones')
})

app.get('/api/habitacion', function (req, res) {
  res.send('Estoy buscando una habitacion')
})

app.put('/api/habitaciones', function (req, res) {
  res.send('Estoy actualizando una habitacion')
})

app.delete('/api/habitaciones', function (req, res) {
  res.send('Estoy eliminando una habitacion')
})

//peticiones para las reservas

app.post('/api/reserva', function (req, res) {
  res.send('Estoy guardando una reserva (POST)')
})

app.get('/api/reservas', function (req, res) {
  res.send('Estoy buscando reservas (GET)')
})

app.get('/api/reserva', function (req, res) {
  res.send('Estoy buscando una reserva (GET)')
})

app.put('/api/reserva', function (req, res) {
  res.send('Estoy actualizando una reserva (PUT)')
})

app.delete('/api/reserva', function(req, res){
  res.send('Estoy elimando una reserva (DELETE)')
})
//Levantando un servidor
app.listen(3000, function(){
     console.log("Servidor operando")
})


/////////////