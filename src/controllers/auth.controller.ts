import { NextFunction, Request, Response } from "express";
import { userService } from "../services/user.service";
import { authService } from "../services/auth.service";
import { HttpError } from "../utils/httpError.util";


const login = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const {email, password} = req.body;

        const token = await authService.loginWithEmailAndPassword(email, password);

        res.json({ token });
    } catch (error) {
        next(error);
    }
};

const register = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const {email, password} = req.body;
        const token = await authService.registerUserWithEmailAndPassword(email, password);
        res.status(201).json({ token });
    } catch (error) {
       next(error);
    }
};

export const authController = {
    login,
    register,
};