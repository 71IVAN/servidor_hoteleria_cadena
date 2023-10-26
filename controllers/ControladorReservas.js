import moment from "moment"

//import { ServicioReservas } from "../services/ServiciosReservas.js";
export class ControladorReservas{
    constructor(){}
    
    async buscarTodas(request, response){
        try{
            //1. Hay que recibir datos
            //2. Intentare conectarme a BD
            //3. Envio la respuesta
            let servicioReservas = new ServicioReservas()
            response.status(200).json({
                "estado": true,
                "mensaje":"Exito buscando las habitaciones",
                "datos": await servicioReservas.buscarTodas()
            })
        }catch(error){

        }
    }

    async buscarPorId(request, response){
        try{
            let servicioReservas = new ServicioReservas()
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando las habitacion",
                "datos": await servicioReservas.buscarPorId()
            })
        }catch(error){
        }
    }

    async modificar(request, response){
        try{
            let servicioReservas = new ServicioReservas()
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito al modificar la habitacion",
                "datos": await servicioReservas.modificar()
            })
        }catch(error){

        }
    }

    async resgitrar(request, response){
        try{
            const fechaInicio = moment(fechaInicioReserva)
            const fechaFinal = moment(fechaFinalReserva)
            const diferenciaDias = fechaFinal.diff(fechaInicio, 'days')
            let servicioReservas = new ServicioReservas()
            response.status(200).json({
                "estado":true,
                "mensaje": "Exito al registrar la habitacion",
                "datos": await servicioReservas.resgitrar(),
                "fechaInicio" : fechaInicio,
                "fechaFinal": fechaFinal,
                "diferencia":diferenciaDias
            })
        }catch(error){
            response.status(500).json({
                "estado": false,
                "mensaje": "Error al registrar la habitación",
                "error": error
            });
        }
    }

    async eliminar(request, response){
        try{
            let servicioReservas = new ServicioReservas()
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito al eliminar reserva",
                "datos": await servicioReservas.eliminar()
            })
        }catch(error){
            
        }
    }

}



