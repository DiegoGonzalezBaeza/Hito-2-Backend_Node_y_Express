import {Router} from 'express';
import { genreController } from '../controllers/genre.controller';

const router: Router = Router();

router.post("/createGenre", genreController.createGenre);

router.get("/readAllGenres", genreController.getGenres);


export default router;