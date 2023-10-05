import { Sequelize } from "sequelize";


const sequelize = new Sequelize('appweb', 'root', '6576', {
    host: 'localhost',
    dialect: 'mysql',   
});

export default sequelize;