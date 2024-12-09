import { MovieModel } from "../models/movie.model";
// import {nanoid} from "nanoid";
// import { User } from "../interfaces/user.interface";
// import bcrypt from "bcryptjs";
import { HttpError } from "../utils/httpError.util";

const getAllMovies = async () => {
    const movies = await MovieModel.findAllMovies();
    return movies;
};

const getMovieById = async (id: string) => { 
    const movie = await MovieModel.findMovieById(id);
    if (!movie) throw new HttpError("Movie not found", 400);
    return movie;
  };

const getMovieByTitle = async (title: string) => {
    const movie = await MovieModel.findOneByTitle(title);
    if (!movie) throw new HttpError("Movie not found", 400);
    return movie;
};


const createMovie = async(title: string, 
    release_year: number, 
    director?: string, 
    duration_minutes?: number,
    synopsis?: string,
    poster_url?: string) => {

    const movie = await MovieModel.findOneByTitle(title)

    if (movie){
        throw new HttpError("Movie already exists", 400);
    }

    const newMovie = await MovieModel.createMovie(title, release_year, director, duration_minutes, synopsis, poster_url);   

    return newMovie;
};

const updateMovieById = async (id: string, title: string, 
    release_year: number, 
    director?: string, 
    duration_minutes?: number,
    synopsis?: string,
    poster_url?: string) => {

    const movie = await MovieModel.updateMovie(id, title, release_year, director, duration_minutes, synopsis, poster_url);
    if (!movie) throw new HttpError("Movie not found", 400);
    return movie;
};

const deleteMovieById = async (id: string) => {
    const movie = await MovieModel.removeMovie(id);
    if (!movie) throw new HttpError("Movie not found", 400);
    return movie;
};

export const movieService = {
    getAllMovies,
    getMovieById,
    getMovieByTitle,
    createMovie,
    updateMovieById,
    deleteMovieById,
};
