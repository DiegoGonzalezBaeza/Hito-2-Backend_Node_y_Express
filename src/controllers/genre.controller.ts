import { Request, Response, NextFunction} from "express";
import { genreService } from "../services/genre.service";

const getGenres = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const genres = await genreService.getAllGenres();
        res.json(genres);
    }catch (error) {
        next(error);
    }
};

const getGenre = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { id } = req.params;
        const genre = await genreService.getGenreById(parseInt(id));
    if (!genre) {
        res.status(404).json({ message: "Genre not found" });
    } else {
        res.json(genre);
    }
    }catch (error) {
        next(error);
    }
};


const createGenre = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const { name } = req.body;
        const newGenre = await genreService.createGenre(name);
        res.status(201).json({ newGenre });
    }catch (error) {
        next(error);
    }
};

export const genreController = {
    createGenre,
    getGenres,
    getGenre,
}
