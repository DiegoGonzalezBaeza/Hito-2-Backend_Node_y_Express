import { Request, Response } from "express";
import { userService } from "../services/user.service";

const getUsers = async(req: Request, res: Response) => {
    try{
        const users = await userService.getAllUsers();
        res.json(users);
    }catch (error) {
        console.log(error);
        if (error instanceof Error) {
        res.status(500).json({error: error.message});
        } else res.status(500).json({error: "Error del servidor"});;
    }
};

const getUser = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const user = await userService.getUseById(id);
    if (!user) {
        res.status(404).json({ message: "User not found" });
    } else {
        res.json(user);
    }
    }catch (error) {
        console.log(error);
        if (error instanceof Error) {
        res.status(500).json({error: error.message});
        } else res.status(500).json({error: "Error del servidor"});;
    }
};


const createUser = async(req: Request, res: Response) => {
    try{
        const {email, password} = req.body;
        const newUser = await userService.createUserWithEmailAndPassword(email, password);
        res.json({ newUser });
    }catch (error) {
        console.log(error);
        if (error instanceof Error) {
        res.status(500).json({error: error.message});
        } else res.status(500).json({error: "Error del servidor"});;
    }
};

export const userController = {
    getUsers,
    createUser,
    getUser,
}
