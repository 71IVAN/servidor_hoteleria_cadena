//esoacio para definir las rutas o enpoints especificos de su API
import express from 'express'


export let rutasApi = express.Router()

//Aca van sus enpoints
    rutasApi.post('/api/habitaciones', function (req, res) {
    res.send('Estoy guardando una habitacion')

    rutasApi.get('/api/habitaciones', function (req, res) {
        res.send('Estoy buscando todas las habitaciones')
    })
    
    rutasApi.get('/api/habitacion', function (req, res) {
        res.send('Estoy buscando una habitacion')
    })
    
    rutasApi.put('/api/habitaciones', function (req, res) {
        res.send('Estoy actualizando una habitacion')
    })
    
    rutasApi.delete('/api/habitaciones', function (req, res) {
        res.send('Estoy eliminando una habitacion')
    })
    
    //peticiones para las reservas
    
    rutasApi.post('/api/reserva', function (req, res) {
        res.send('Estoy guardando una reserva (POST)')
    })
    
    rutasApi.get('/api/reservas', function (req, res) {
        res.send('Estoy buscando reservas (GET)')
    })
    
    rutasApi.get('/api/reserva', function (req, res) {
        res.send('Estoy buscando una reserva (GET)')
    })
    
    rutasApi.put('/api/reserva', function (req, res) {
        res.send('Estoy actualizando una reserva (PUT)')
    })
    
    rutasApi.delete('/api/reserva', function(req, res){
        res.send('Estoy elimando una reserva (DELETE)')
    })
})