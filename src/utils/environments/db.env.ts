import { DataBaseEnvironment } from "../../interfaces";
import "dotenv/config"
import { env } from "process"

export class DatabaseEnv implements DataBaseEnvironment {
    public static _instance: DatabaseEnv;

    public DB_NAME = env.DB_NAME;
    public DB_DIALECT = env.DB_DIALECT;
    public DB_USER = env.DB_USER;
    public DB_PASS = env.DB_PASS;
    public DB_HOST = env.DB_HOST;
    public DB_PORT = env.DB_PORT;

    private constructor() { }
    public static getInstance(): DatabaseEnv {
        if (!DatabaseEnv._instance) {
            DatabaseEnv._instance = new DatabaseEnv()
        }

        return DatabaseEnv._instance;
    }
}

