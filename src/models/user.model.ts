import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { User } from "../interfaces/user.interface"

const __dirname = import.meta.dirname;
// __dirname nos da la ruta relativa al archivo  o sea la ruta hasta la carpeta models


// ahora se intenta buscar la ruta donde esta el archivo con todos los usuarios 
// .. retrocede en carpeta
const pathFile = path.resolve(__dirname, "../../data/users.json");

const readUsers = async () => {
    const usersJSON = await readFile(pathFile, "utf-8");
    const users = JSON.parse(usersJSON) as User[];
    return users;
};

// Para escribir Usuarios:
const writeUsers = async(users: User[]) => {
    const usersJSON = JSON.stringify(users, null, 2);
    return await writeFile(pathFile, usersJSON);
};

export const UserModel = {
    readUsers,
    writeUsers,
}