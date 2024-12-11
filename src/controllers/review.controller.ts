import { Request, Response, NextFunction } from "express";
import { ReviewsService } from "../services/review.service";
import { HttpError } from "../utils/httpError.util";

// Crear una nueva reseña
const createReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { movie_id, rating, review_text } = req.body;
    const { uid } = req;

    if (!uid) throw new HttpError("No token", 401);
  
    const review = await ReviewsService.createReview(uid, movie_id, rating, review_text);
    res.status(201).json(review); // Devuelve la reseña creada
  } catch (error) {
    next(error);
  }
};

// Obtener todas las reseñas de una película
const getReviewsByMovie = async (req: Request, res: Response, next: NextFunction) => {
  const { movieId } = req.params;

  try {
    const reviews = await ReviewsService.getReviewsByMovie(parseInt(movieId, 10));
    res.status(200).json(reviews); // Devuelve todas las reseñas de la película
  } catch (error) {
    next(error);
  }
};

// Obtener todas las reseñas de un usuario
const getReviewsByUser = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  try {
    const reviews = await ReviewsService.getReviewsByUser(userId);
    res.status(200).json(reviews); // Devuelve todas las reseñas de un usuario
  } catch (error) {
    next(error);
  }
};

// Obtener una reseña por su id
const getReviewById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const review = await ReviewsService.getReviewById(parseInt(id, 10));

    if (!review) {
      return void res.status(404).json({ error: "Review not found" });
    }

    res.status(200).json(review); // Devuelve la reseña específica
  } catch (error) {
    next(error);
  }
};

// Actualizar una reseña
const updateReview = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { rating, review_text } = req.body;

  try {
    const updatedReview = await ReviewsService.updateReview(parseInt(id, 10), rating, review_text);

    if (!updatedReview) {
      return void res.status(404).json({ error: "Review not found" });
    }

    res.status(200).json(updatedReview); // Devuelve la reseña actualizada
  } catch (error) {
    next(error);
  }
};

// Eliminar una reseña
const deleteReview = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const deletedReview = await ReviewsService.deleteReview(parseInt(id, 10));

    if (!deletedReview) {
      return void res.status(404).json({ error: "Review not found" });
    }

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const ReviewsController = {
  createReview,
  getReviewsByMovie,
  getReviewsByUser,
  getReviewById,
  updateReview,
  deleteReview,
};