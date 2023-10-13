//Esta clase representa un servidor
import express from 'express'
import { rutasApi } from './routes/rutasHoteles.js'
import { establecerConexionBD } from './database/conexion.js'

export class Api{

    constructor(){
        this.app = express()
        this.concectarBD()
        this.procesarPeticiones()

    }
    //Funciones de un servidor
    //1. Imiciar el servidor
    iniciarServidor(){
        this.app.listen(3000, function(){
            console.log("Servidor operando")
       })
       
    }

    //2. Procesar peteciones y responderlas
    procesarPeticiones(){
        this.app.use(express.json())
        this.app.use("/",rutasApi)
        
        }
        
    //3.Se conecta a la base de datos
    concectarBD(){
        establecerConexionBD()
    }
}