import { DataType, DataTypes } from "sequelize";
import db from '../config/connectdb';
import { STRING } from "sequelize";

const File = db.define('files', {
    nombre: {
        type: DataTypes.STRING
    },
    iduser: {
        type: DataTypes.NUMBER
    },
    path: {
        type: DataTypes.STRING
    }
},{
    createdAt: false,
    updatedAt: false
});

export default File;