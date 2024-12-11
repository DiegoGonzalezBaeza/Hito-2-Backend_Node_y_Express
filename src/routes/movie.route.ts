import {Router} from 'express';
import { movieController } from '../controllers/movie.controller';

const router: Router = Router();

router.post("/create", movieController.createMovie);

router.get("/readAll", movieController.getMovies);

router.get("/:id", movieController.getMovie);

// router.post("/update", movieController.updateMovie);

export default router;