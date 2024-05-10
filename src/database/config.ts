import "dotenv/config";
import { Dialect, Sequelize } from "sequelize";
import { DatabaseEnv } from "../utils";

//Obteniendo los environment
const env = DatabaseEnv.getInstance();

//Detalles de conexión
export const dbInstance = new Sequelize({
    dialect: env.DB_DIALECT as unknown as Dialect,
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
});


export async function connection() {
    try {
        await dbInstance.authenticate();
        console.log(`Conexión a database establecida`);
    } catch (error) {
        console.log("Error al establecer conexion con database");
    }
}
