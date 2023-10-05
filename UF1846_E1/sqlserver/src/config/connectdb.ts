import { Sequelize } from "sequelize";

const sequelize = new Sequelize( 'appfile' , 'root' , '*As03Ch07Fz13#',{
    host: 'localhost',
    dialect:'mysql'
});
export default sequelize;
