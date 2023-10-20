
import modeloHabitacion from '../models/modeloHabitacion.js'
export class ServicioHabitacion{

    constructor(){}

    async buscarTodas(){
        let habitaciones = await modeloHabitacion.find()
        return habitaciones
    }

    async buscarPorId(id){
        let habiatcion = await modeloHabitacion.findById(id)
        return habiatcion
    }

    async modificar(id, datos){
        return await modeloHabitacion.findByIdAndUpdate(id, datos)
    }

    async registrar(datos){
        let habiatcionNueva = new modeloHabitacion(datos)
        return await habiatcionNueva.save()
    }

    async eliminar(id){
        let reservaEliminada = await modeloHabitacion.findByIdAndDelete(id)
        return reservaEliminada
    }
}