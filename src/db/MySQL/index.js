import mysql from 'mysql2/promise'
import {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER} from "../../../config.js";

//Creamos una configuración
const config = {
    host: DB_HOST,
    user: DB_USER,
    port: DB_PORT,
    password: DB_PASSWORD,
    database: DB_NAME,
}
//Establecer conección con la base de datos con la configuración 
const db = await mysql.createPool(config);

export default db