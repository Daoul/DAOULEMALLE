import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Tarea = sequelize.define('Tarea' , {
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