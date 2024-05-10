import "dotenv/config";
import { Sequelize } from "sequelize";

//Detalles de conexión
export const dbInstance = new Sequelize({
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logger: true
});


export async function connection() {
    try {
        await dbInstance.authenticate();
        console.log(`Conexión a database establecida`);
    } catch (error) {
        console.log("Error al establecer conexion con database");
        // return error;
    }
}
