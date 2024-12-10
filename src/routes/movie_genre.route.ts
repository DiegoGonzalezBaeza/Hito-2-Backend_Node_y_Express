import { Router } from 'express';
import { movieGenreController } from "../controllers/movie_genre.controller";

const router: Router = Router();

// Añadir un género a una película
router.post("/CreateMovieGenre", movieGenreController.addGenreToMovie);

// Obtener todos los géneros asociados a una película
router.get("/ReadMovieGenre/:movieId", movieGenreController.getGenresByMovie);

// Eliminar un género específico de una película
//  router.delete("/DeleteMovie/:movieId/genres/:genreId", movieGenreController.removeGenreFromMovie);

// Eliminar todos los géneros asociados a una película
// router.delete("/Delete2MovieGenre", movieGenreController.removeAllGenresFromMovie);

export default router;