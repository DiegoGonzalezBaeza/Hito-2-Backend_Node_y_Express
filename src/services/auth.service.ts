import { userService } from "./user.service"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const loginWithEmailAndPassword = async(email: string, password: string) => {
    const users = await userService.getAllUsers();

    //  1.verificar que exista el usuario
    const user = users.find(item => item.email === email);
    if(!user) {
        throw new Error("User not found");
    }

    // 2. comparar los hash de contraseña
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw new Error("Password incorrect"); 
    }

    // 3. Generar el Token
    const token = jwt.sign({email: user.email}, "secret", {
        expiresIn: "1h"
    });

    return token ;
};

export const authService = {
    loginWithEmailAndPassword,
};