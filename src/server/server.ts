import express, { Application } from 'express'
import cors from 'cors'
import "dotenv/config"
import { SystemEnv } from '../utils';
import { connection } from '../database/config';
import { taskRouter } from '../routes/task.route';

export class Server {
    private readonly app: Application;
    private readonly _env: SystemEnv;
    private paths = {
        task: '/api/task'
    }

    constructor() {
        this.app = express();
        this._env = SystemEnv.getInstance();

        //Conectar Base de datos
        this.ConectarDB();
        //Middlewares
        this.middlewares();
        //Rutas de app
        this.routes();
    }

    async ConectarDB() {
        await connection()
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.json());
        //Directorio Público
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.paths.task, taskRouter)
    }

    listen() {
        this.app.listen(this._env.REST_PORT, () => {
            console.log(`Servidor corriendo en puerto ${this._env.REST_PORT}` );
        });
    }
}
