import db from "../db/MySQL/index.js"
import bcrypt from "bcrypt"

export class UserModel {
    static async createUser({userData}) {
        let user = await db.query(
            'SELECT name FROM userTable WHERE name = ?', [userData.name]
        )
        if (user[0].length > 0) {
            return false
        }
        try {
            await db.query(
                'INSERT INTO userTable (name , password) VALUES (? , ?)',
                [userData.name, userData.password]
            )
            return true
        } catch (e) {
            throw new Error(e.message)
        }
    }

    static async getByID({userData}) {
        try {
            const [user] = await db.query(
                'SELECT * FROM userTable WHERE name = (?)', [userData.name]
            )
            if (user.length > 0) {
                const isValidPassword = userData.password === user[0].password
                if (!isValidPassword) throw new Error('Invalid password')
                return user[0]
            }
            return null
        } catch (e) {
            throw new Error(e.message)
        }
    }
}