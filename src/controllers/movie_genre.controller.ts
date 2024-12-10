import { Request, Response, NextFunction } from "express";
import { MoviesGenresService } from "../services/movie_genre.service";

// Añadir un género a una película
const addGenreToMovie = async (req: Request, res: Response, next: NextFunction) => {
  const { movieId, genreId } = req.body;

  try {
    const movieGenre = await MoviesGenresService.addGenreToMovie(movieId, genreId);
    res.status(201).json(movieGenre); // Devuelve la relación creada
  } catch (error) {
    next(error);
  }
};

// Obtener todos los géneros asociados a una película
const getGenresByMovie = async (req: Request, res: Response, next: NextFunction) => {
  const { movieId } = req.params;

  try {
    const genres = await MoviesGenresService.findGenresByMovie(parseInt(movieId, 10));
    res.status(200).json(genres); // Devuelve los géneros asociados a la película
  } catch (error) {
    next(error);
  }
};

// Eliminar un género específico de una película
const removeGenreFromMovie = async (req: Request, res: Response, next: NextFunction) => {
    const { movieId, genreId } = req.params; // Asegúrate de que estos sean correctos
  
    try {
      const removedGenre = await MoviesGenresService.removeGenreFromMovie(
        parseInt(movieId, 10),
        parseInt(genreId, 10)
      );
  
      if (!removedGenre) {
        return res.status(404).json({ error: "Genre not found for the given movie." });
      }
  
      res.status(200).json(removedGenre); // Devuelve la relación eliminada
    } catch (error) {
      next(error); // Pasa el error al middleware de manejo de errores
    }
  };

// Eliminar todos los géneros asociados a una película
const removeAllGenresFromMovie = async (req: Request, res: Response, next: NextFunction) => {
  const { movieId } = req.params;

  try {
    const deletedCount = await MoviesGenresService.removeAllGenresFromMovie(parseInt(movieId));

    if (deletedCount === 0) {
      return res.status(404).json({ error: "No genres found for the given movie." });
    }

    res.status(200).json({ message: `${deletedCount} genres removed from the movie.` });
  } catch (error) {
    next(error);
  }
};

export const movieGenreController = {
    addGenreToMovie,
    getGenresByMovie,
    removeGenreFromMovie,
    removeAllGenresFromMovie
}