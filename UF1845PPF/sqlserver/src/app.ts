import'dotenv/config';
import express from 'express';
import cors from 'cors';
import adminSrouter from './routes/AdminSroutes';
import routercurso from './routes/cursoroutes';
import routerfile from './routes/Fileroutes';
import routermensaje from './routes/mensajeroutes';
import routertarea from './routes/tareaRoutes';
import routerusario from './routes/usuarioroutes';
import sequelize from './config/connectdb';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());  // cors connecion interna a la applicacion
app.use(express.json());  // express connecion externa
app.use(adminSrouter);
app.use(routercurso);
app.use(routerfile);
app.use(routermensaje);
app.use(routertarea);
app.use(routerusario);

app.listen(PORT, () => console.log(`Api connectada por el puerto ${PORT}`));

try {
    sequelize.authenticate();
    console.log('La conexión con la base datos es correcta');
}catch(error){
    console.log('No se puede conectar con la base datos ');
}
