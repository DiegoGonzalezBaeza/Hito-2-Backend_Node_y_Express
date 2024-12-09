import { UserModel } from "../models/user.model";
// import {nanoid} from "nanoid";
// import { User } from "../interfaces/user.interface";
import bcrypt from "bcryptjs";
import { HttpError } from "../utils/httpError.util";

const getAllUsers = async () => {
    const users = await UserModel.findAll();
    return users;
};

const getUseById = async (id: string) => { 
    const user = await UserModel.findById(id);
    if (!user) throw new HttpError("User not found", 400);
    return user;
  };

const getUserByEmail = async (email: string) => {
    const user = await UserModel.findOneByEmail(email);
    if (!user) throw new HttpError("User not found", 400);
    return user;
};


const createUserWithEmailAndPassword = async(email: string, password: string) => {

    const user = await UserModel.findOneByEmail(email)

    if (user){
        throw new HttpError("Email already exists", 400);
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    const newUser = await UserModel.create(email, passwordHashed);    

    return newUser;
};

const updateUserById = async (id: string, email: string, password: string) => {
    const user = await UserModel.update(id, email, password);
    if (!user) throw new HttpError("User not found", 400);
    return user;
};

const deleteUserById = async (id: string) => {
    const user = await UserModel.remove(id);
    if (!user) throw new HttpError("User not found", 400);
    return user;
};

export const userService = {
    getAllUsers,
    createUserWithEmailAndPassword,
    getUseById,
    updateUserById,
    getUserByEmail,
    deleteUserById,
};