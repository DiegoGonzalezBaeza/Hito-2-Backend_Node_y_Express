import { Router } from "express";
import { ReviewsController } from "../controllers/review.controller";
import { verifyToken } from "../middlewares/jwt.middleware";

const router = Router();

router.use(verifyToken);

// Crear una nueva reseña
router.post("/Create", ReviewsController.createReview);

// Obtener todas las reseñas de una película
router.get("/movie/:movieId", ReviewsController.getReviewsByMovie);

// Obtener todas las reseñas de un usuario
router.get("/user/:userId", ReviewsController.getReviewsByUser);

// Obtener una reseña por su id
//  router.get("/:id", ReviewsController.getReviewById);

// Actualizar una reseña por su id
// router.put("/Update/:id", ReviewsController.updateReview);

// Eliminar una reseña por su id
// router.delete("/Delete/:id", ReviewsController.deleteReview);

export default router;