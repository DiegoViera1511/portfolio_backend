import jwt from 'jsonwebtoken'
import {SECRET_JWT} from "../config.js";

export function createToken(name) {
    return jwt.sign({name: name}, SECRET_JWT, {expiresIn: '24h'});
}

export function isValidToken(token) {
    jwt.verify(token, SECRET_JWT, {complete: true});
}