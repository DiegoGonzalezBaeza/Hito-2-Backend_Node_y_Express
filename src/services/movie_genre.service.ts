import { MoviesGenresModel } from "../models/movie_genre.model";
import { MovieGenre } from "../interfaces/movie_genre.interface";
import { HttpError } from "../utils/httpError.util";

// Añadir un género a una película
const addGenreToMovie = async (movieId: number, genreId: number): Promise<MovieGenre> => {
    const movie_genre = await MoviesGenresModel.addGenreToMovie(movieId, genreId);
    if (!movie_genre) throw new HttpError("Genre not found", 400);
    return movie_genre;
};

// Obtener todos los géneros asociados a una película
const findGenresByMovie = async (movieId: number): Promise<MovieGenre[]> => {
  return await MoviesGenresModel.findGenresByMovieId(movieId);
};

// Eliminar un género específico de una película
const removeGenreFromMovie = async (movieId: number, genreId: number) => {
  return await MoviesGenresModel.removeGenreFromMovie(movieId, genreId);
};

// Eliminar todos los géneros asociados a una película
const removeAllGenresFromMovie = async (movieId: number) => {
  return await MoviesGenresModel.removeAllGenresFromMovie(movieId);
};

export const MoviesGenresService = {
  addGenreToMovie,
  findGenresByMovie,
  removeGenreFromMovie,
  removeAllGenresFromMovie,
};