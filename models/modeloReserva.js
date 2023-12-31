import mongoose from "mongoose";

const Schema = mongoose.Schema

const Reserva = new Schema({
    nombreCliente:{
        type:String,
        required:true
    },
    apellidoCliente:{
        type:String,
        required:true
    },
    fechaInicioReserva:{
        type:Date,
        required:true
    },
    fechaFinalReserva:{
        type:Date,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    }
})


export const modeloReserva = mongoose.model('reservas', Reserva)