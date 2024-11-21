import {Router} from "express";
import {userRouter} from "./Routers/userRouter.js";

export const appRouter = () => {
    const router = Router()
    router.use(userRouter())
    return router
}