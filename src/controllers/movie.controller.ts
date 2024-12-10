import { Request, Response, NextFunction} from "express";
import { movieService } from "../services/movie.service";

const getMovies = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const movies = await movieService.getAllMovies();
        res.json(movies);
    }catch (error) {
        next(error);
    }
};

const getMovie = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { id } = req.params;
        const movie = await movieService.getMovieById(parseInt(id));
    if (!movie) {
        res.status(404).json({ message: "Movie not found" });
    } else {
        res.json(movie);
    }
    }catch (error) {
        next(error);
    }
};


const createMovie = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const {title, release_year, director, duration_minutes, synopsis, poster_url} = req.body;
        const newMovie = await movieService.createMovie(title, release_year, director, duration_minutes, synopsis, poster_url);
        res.status(201).json({ newMovie });
    }catch (error) {
        next(error);
    }
};

export const movieController = {
    createMovie,
    getMovies,
    getMovie,
}
