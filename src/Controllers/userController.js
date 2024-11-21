import {validateUser} from "../Schemas/userSchema.js";
import {UserModel} from "../Models/userModel.js";
import {createToken} from "../utils.js";

export class UserController {
    static async createUser(req, res) {
        try {
            const result = validateUser(req.body)
            if (!result.success) {
                res.status(401).json({message: result.error.message})
            }
            const newUser = await UserModel.createUser({userData: result.data})
            console.log(newUser)
            if (!newUser) {
                res.status(400).send({message: "User already exist"})
            } else {
                res.sendStatus(201)
            }
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    static async getByID(req, res) {
        try {
            const result = validateUser(req.body)
            if (!result.success) {
                res.status(401).json({message: result.error.message})
            }
            const {name, password} = result.data;
            const user = await UserModel.getByID({userData: {name: name, password: password}})
            if (!user) {
                res.sendStatus(401)
                return
            }
            const token = createToken(name);
            res.send({token})
        } catch (e) {
            res.send(e.message).sendStatus(401)
        }
    }
}