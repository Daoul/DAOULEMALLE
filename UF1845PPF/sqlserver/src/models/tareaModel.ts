import { DataType, DataTypes } from "sequelize";
import db from '../config/connectdb';
import { STRING } from "sequelize";

const Tarea = db.define('Tarea' , {
    nombre: {
        type: DataTypes.STRING
        
    },
    descripcion: {
        type: DataTypes.STRING
    },
    punctuacion: {
        type: DataTypes.NUMBER
    },
    estado: {
        type: DataTypes.STRING
    },
    importancia: {
        type: DataTypes.STRING
        
    },
    
},{
    createdAt: false,
    updatedAt: false

});

export default Tarea;