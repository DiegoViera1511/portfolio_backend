import {Router} from "express";
import {UserController} from "../Controllers/userController.js";
import {isValidToken} from "../utils.js";

export const userRouter = () => {
    const userR = Router()

    userR.post("/logIn", UserController.getByID)
    userR.post("/users", UserController.createUser)

    userR.get("/protected", async (req, res) => {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            isValidToken(token);
            res.send("You are in the protected area")
        } catch (e) {
            res.sendStatus(400).send({message: e.message})
        }
    })

    return userR
}