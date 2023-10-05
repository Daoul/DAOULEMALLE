import'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/Fileroutes';
import sequelize from './config/connectdb';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());  // cors connecion interna a la applicacion
app.use(express.json());  // express connecion externa
app.use(router);

app.listen(PORT, () => console.log(`Api connectada por el puerto ${PORT}`));

try {
    sequelize.authenticate();
    console.log('La conexión con la base datos es correcta');
}catch(error){
    console.log('No se puede conectar con la base datos ');
}
