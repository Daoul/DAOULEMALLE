import { DataTypes } from "sequelize";
import db from '../config/connectdb';
import { STRING } from "sequelize";

const Admin = db.define('adminservices' , {
    nombre: {
        type: DataTypes.STRING
        
    },
    descripcion: {
        type: DataTypes.STRING
    },
    
    
},{
    createdAt: false,
    updatedAt: false

});

export default Admin;