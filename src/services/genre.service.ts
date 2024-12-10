import { GenreModel } from "../models/genre.model";
// import {nanoid} from "nanoid";
// import { User } from "../interfaces/user.interface";
// import bcrypt from "bcryptjs";
import { HttpError } from "../utils/httpError.util";

const getAllGenres = async () => {
    const genre = await GenreModel.findAllGenres();
    return genre;
};

const getGenreById = async (id: number) => { 
    const genre = await GenreModel.findGenreById(id);
    if (!genre) throw new HttpError("Genre not found", 400);
    return genre;
  };


const createGenre = async(name: string) => {

    const genre = await GenreModel.findOneGenreByTitle(name);

    if (genre){
        throw new HttpError("Genre already exists", 400);
    }

    const newGenre = await GenreModel.createGenre(name);   

    return newGenre;
};

const updateGenreById = async (id: number, name: string) => {

    const genre = await GenreModel.updateGenre(id, name);
    if (!genre) throw new HttpError("Genre not found", 400);
    return genre;
};

const deleteGenreById = async (id: number) => {
    const genre = await GenreModel.removeGenre(id);
    if (!genre) throw new HttpError("Genre not found", 400);
    return genre;
};

export const genreService = {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenreById,
    deleteGenreById,
};