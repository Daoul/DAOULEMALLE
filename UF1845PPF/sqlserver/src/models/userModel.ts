import { DataTypes } from "sequelize";
import db from '../config/connectdb';

const UserModel = db.define('usuarios',{
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    }
   
},{
    createdAt: false,
    updatedAt: false
});

export default UserModel;