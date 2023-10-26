//espacio para definir las rutas o enpoints especificos de su API
import  express  from "express";

//Importo los controladores
import {ControladorReservas} from "../controllers/ControladorReservas.js"

let controladorReservas = new ControladorReservas()

export let rutasApi = express.Router()

 //peticiones para las reservas
    
 rutasApi.post('/api/reserva', controladorReservas.resgitrar)
    
 rutasApi.get('/api/reservas', controladorReservas.buscarTodas)
 
 rutasApi.get('/api/reserva/:id', controladorReservas.buscarPorId)
 
 rutasApi.put('/api/reserva/:id', controladorReservas.modificar)
 
 rutasApi.delete('/api/reserva/:id', controladorReservas.eliminar)


 

