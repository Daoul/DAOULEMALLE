import { DataType, DataTypes } from "sequelize";
import db from '../config/connectdb';
import { STRING } from "sequelize";

const Usuario = db.define('Usuario',{
    nombre: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    Fnacimiento: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
    foto: {
        type: DataTypes.STRING
    }
    
},{
    createdAt: false,
    updatedAt: false
});

export default Usuario;