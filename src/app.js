import express from "express";
import cors from "cors";
import {appRouter} from "./appRouter.js";
import {PORT} from "../config.js";

export const createApp = () => {
    const app = express();
    app.use(express.json())
    app.disable("x-powered-by");
    app.use(cors())

    app.options('/users/:name', (req, res) => {
        //añadir cabeceras para hacer acciones con la api
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        //Para hacer la acción hay que hacer res.send()
        res.send(200)
    })

    app.use("/api", appRouter());

    app.listen(PORT, () => {
        console.log(`listening on port http://localhost:${PORT}`);
    })
}
