//esoacio para definir las rutas o enpoints especificos de su API
import express from 'express'

//Importo los controladores
import {ControladorHabitacion} from "../controllers/ControladorHabitacion"
import {ControladorReservas} from "../controllers/ControladorReservas"


export let rutasApi = express.Router()

//Aca van sus enpoints
    rutasApi.post('/api/habitaciones')

    rutasApi.get('/api/habitaciones')
    
    rutasApi.get('/api/habitacion/:id')
    
    rutasApi.put('/api/habitaciones/:id')
    
    rutasApi.delete('/api/habitaciones/:id')
    
    //peticiones para las reservas
    
    rutasApi.post('/api/reserva')
    
    rutasApi.get('/api/reservas')
    
    rutasApi.get('/api/reserva/:id')
    
    rutasApi.put('/api/reserva/:id')
    
    rutasApi.delete('/api/reserva/:id')