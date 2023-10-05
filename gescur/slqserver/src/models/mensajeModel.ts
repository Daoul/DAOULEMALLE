import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Mensaje = sequelize.define('Mensaje', {
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