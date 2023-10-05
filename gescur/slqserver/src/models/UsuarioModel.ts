import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Usuario = sequelize.define('Usuario',{
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