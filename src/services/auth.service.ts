import { userService } from "./user.service"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model";
import {generateAccessToken} from "../utils/auth.util"
import { HttpError } from "../utils/httpError.util";
import logger from "../utils/logger.util";


const loginWithEmailAndPassword = async(email: string, password: string) => {
    const user = await userService.getUserByEmail(email);

    if(!user) {
        logger.error(email);
        throw new HttpError("User not found", 400);
    }

    // 2. comparar los hash de contraseña
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw new HttpError("Password incorrect ", 400); 
    };

    // 3. Generar el Token
    const token = generateAccessToken(user.email, user.id);

    return token ;
};

const registerUserWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    const newUser = await userService.createUserWithEmailAndPassword(email, password);
  
    // 3. Generar el Token
    const token = generateAccessToken(newUser.email, newUser.id);

    return token ;
  };

export const authService = {
    loginWithEmailAndPassword,
    registerUserWithEmailAndPassword,
};