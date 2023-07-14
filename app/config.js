import { config } from "dotenv";

config();

//se toman los datos de la bas ede datos que estan en el archivo .env
export default {
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_DATABASE || "proyecto_sinvex",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || ""
};