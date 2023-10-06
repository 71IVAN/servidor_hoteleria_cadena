export class ControladorHabitacion{
    constructor(){}

    buscarTodas(request, response){
        try{
            //1. Hay que recibir datos
            //2. Intentare conectarme a BD
            //3. Envio la respuesta
            response.status(200).json({
                "estado": true,
                "mensaje":"Exito buscando las habitaciones",
                "datos": "Aca ban los datos de la BD"
            })

        }catch(error){
            response.status(400).json({
                "estado": false,
                "mensaje":"error my rey , quedate en la casa",
                "datos": null
            })
        }
    }
    buscarPorId(request, response){
        try{
             //1. Hay que recibir datos (si)
            let id = request.params.id
            //2. Usar id que envio el cliente para buscar la habitacion em la BD
            //3. Respondo al cliente
            response.status(200).json({
                "estado": true,
                "mensaje":"Exito buscando las habitaciones",
                "datos": "Aca ban los datos de la BD"
            })
            
        }catch(error){
            response.status(400).json({
                "estado": false,
                "mensaje":"error my rey , quedate en la casa" +error,
                "datos": null
            })
        }
    }

    modificar(request, response){
        try{
            //1. Hay que reciir datos(si)
            let id= request.params.id
            let idHabitacion = request.body
            //2. Modificar en bd
            //3.Enviar respuestas 
            response.status(200).json({
                "estado": true,
                "mensaje":"Exito buscando las habitaciones",
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

    registrar(request, response){
        try{
            //1.Recibir datos
            let datosRegistrar = request.body
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
    }

    eliminar(request, response){
        try{
            //1.Recibir datos
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
   
