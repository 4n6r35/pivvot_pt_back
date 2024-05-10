import { SystemEnvironment } from "../../interfaces";
import "dotenv/config"
import { env } from 'process'

export class SystemEnv implements SystemEnvironment {
    private static _instance: SystemEnv;

    public REST_PORT = Number(env.REST_PORT);

    private constructor() { }

    public static getInstance(): SystemEnv {
        if (!SystemEnv._instance) {
            SystemEnv._instance = new SystemEnv();
        }

        return SystemEnv._instance;
    }
}