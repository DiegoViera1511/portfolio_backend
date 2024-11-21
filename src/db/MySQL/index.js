import mysql from 'mysql2/promise'

//Creamos una configuración
const config = {
    host: "autorack.proxy.rlwy.net",//process.env.DB_HOST ?? "localhost",
    user: "root",//process.env.DB_USER ?? "root",
    port: 19345,//process.env.DB_PORT ?? 3306,
    password: "UHqxDvzKotnBpsMrupWqBoJSjNHLDIlX",//process.env.DB_PASSWORD ?? "",
    database: "railway"//process.env.DB_NAME ?? "users_db",
}
//Establecer conección con la base de datos con la configuración 
const db = await mysql.createPool(config);
export default db

//mysql://root:UHqxDvzKotnBpsMrupWqBoJSjNHLDIlX@autorack.proxy.rlwy.net:19345/railway