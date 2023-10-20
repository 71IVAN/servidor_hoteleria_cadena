import {ServicioHabitacion} from '../services/ServicioHabitacion.js'
export class ControladorHabitacion{
    constructor(){}

    async buscarTodas(request, response){
        try{
            //1. Hay que recibir datos
            //2. Intentare conectarme a BD
            //3. Envio la respuesta
            let servicioHabitacion = new ServicioHabitacion()
            response.status(200).json({
                "estado": true,
                "mensaje":"Exito buscando las habitaciones",
                "datos": await servicioHabitacion.buscarTodas()
            })

        }catch(error){
            response.status(400).json({
                "estado": false,
                "mensaje":"error my rey , quedate en la casa",
                "datos": null
            })
        }
    }

    async buscarPorId(request, response){
        try{
             //1. Hay que recibir datos (si)
            let servicioHabitacion = new ServicioHabitacion()
            let id = request.params.id
            //2. Usar id que envio el cliente para buscar la habitacion em la BD
            //3. Respondo al cliente
            response.status(200).json({
                "estado": true,
                "mensaje":"Exito buscando las habitaciones",
                "datos": await servicioHabitacion.buscarPorId(id)
            })
            
        }catch(error){
            response.status(400).json({
                "estado": false,
                "mensaje":"error my rey , quedate en la casa" +error,
                "datos": null
            })
        }
    }

    async modificar(request, response){
        try{
            //1. Hay que reciir datos(si)
            let servicioHabitacion = new ServicioHabitacion()
            let id= request.params.id
            let idHabitacion = request.body
            await servicioHabitacion.modificar(id, datos) //Mostrar datos de esto
            //2. Modificar en bd
            //3.Enviar respuestas 
            response.status(200).json({
                "estado": true,
                "mensaje":"Exito buscando las habitaciones",
                "datos": ""
            })

        }catch(error){
            response.status(400).json({
                "estado": false,
                "mensaje":"error my rey , fallamos modificando la habitacion" +error,
                "datos": null
            })
        }
    }

    async registrar(request, response){
        try{
            //1.Recibir datos
            let servicioHabitacion = new ServicioHabitacion()
            let datosRegistrar = request.body
            await servicioHabitacion.registrar(datos)
            //2. Guardelos en bd
            //3. Responda 
            response.status(200).json({
                "estado": true,
                "mensaje":"Exito al registrar la habitacion",
                "datos": null
            })

        }catch(error){
            response.status(400).json({
                "estado": false,
                "mensaje":"error my rey , fallamos modificando la habitacion" +error,
                "datos": null
            })
        }
        }

        async eliminar(request, response){
            try{
                //1.Recibir datos
                let servicioHabitacion = new ServicioHabitacion()
                let id = request.params.id
                //2.Elimine el id
                //3. Responda
                response.status(200).json({
                    "estado": true,
                    "mensaje":"Exito buscando al borrar habitacion",
                    "datos": null
                })
            }catch(error){
                response.status(400).json({
                    "estado": false,
                    "mensaje":"error my rey , fallamos modificando la habitacion" +error,
                    "datos": null
                })
        
        }
    }
       
}

   
//En reservas Tomar 2 fecchas del objeto datos, la diferencia en dias de esa dos fechas
//Diferencia = Diferencia calculada en dia