import { Sequelize } from "sequelize";


const sequelize = new Sequelize('appcurso' , 'root' , '*As03Ch07Fz13#', {
    host: 'localhost',
    dialect: 'mysql',  
});

export default sequelize;