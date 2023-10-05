import { DataType, DataTypes } from "sequelize";
import db from '../config/connectdb';
import { STRING } from "sequelize";

const File = db.define('File', {
    nombre: {
        type: DataTypes.STRING
    },
    iduser: {
        type: DataTypes.STRING
    },
    path: {
        type: DataTypes.STRING
    }
},{
    createdAt: false,
    updatedAt: false
});

export default File;