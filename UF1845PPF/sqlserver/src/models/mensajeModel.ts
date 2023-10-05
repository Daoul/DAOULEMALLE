import { DataType, DataTypes } from "sequelize";
import db from '../config/connectdb';
import { STRING } from "sequelize";

const Mensaje = db.define('Mensaje', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    asunto: {
        type: DataTypes.STRING
    },
    textomensaje: {
        type: DataTypes.STRING
    },
    
},{
    createdAt: false,
    updatedAt: false
});

export default Mensaje;