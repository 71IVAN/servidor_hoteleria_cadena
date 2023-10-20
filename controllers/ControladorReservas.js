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

    buscarPorId(request, response){}

    modificar(request, response){}

    resgitrar(request, response){}

    eliminar(request, response){}

}