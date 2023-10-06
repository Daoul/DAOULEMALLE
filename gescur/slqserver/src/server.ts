import express, { Application } from 'express';
import cors from 'cors';
import routesUser from './routes/user';
import routesCurso from './routes/CursoRoutes'
import { User } from './models/UserModel';
import Curso from './models/CursoModel'
import sequelize from './db/connection';
import routesUsuario from './routes/usuarioroutes';
import routerMensaje from './routes/mensajeroutes';
import routesTarea from './routes/tareaRoutes';
import Mensaje from './models/mensajeModel';
import Tarea from './models/tareaModel';


class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes() {
       
        this.app.use('/api/users', routesUser);
        this.app.use('/api/cursos', routesCurso);
        this.app.use('/api/usuarios', routesUsuario);
        this.app.use('/api/mensajes', routerMensaje);
        this.app.use('/api/tareas', routesTarea);
    }

    middlewares() {
        // Parseo body
        this.app.use(express.json());
        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            sequelize.authenticate()
            await User.sync()
            await Curso.sync()
            await User.sync()
            await Mensaje.sync()
            await Tarea.sync()
        } catch (error) {
            console.error('No se puede conectar con la Base de Datos:', error);
        }
    }
}

export default Server;