import { ReviewsModel } from "../models/review.model";
import { Review } from "../interfaces/review.interface";

// Crear una nueva reseña
const createReview = async (
  userId: string, 
  movieId: number, 
  rating: number, 
  reviewText: string
): Promise<Review> => {
  const review = await ReviewsModel.createReview(userId, movieId, rating, reviewText);
  return review;
};

// Obtener todas las reseñas para una película
const getReviewsByMovie = async (movieId: number): Promise<Review[]> => {
  const reviews = await ReviewsModel.getReviewsByMovie(movieId);
  return reviews;
};

// Obtener todas las reseñas de un usuario
const getReviewsByUser = async (userId: string): Promise<Review[]> => {
  const reviews = await ReviewsModel.getReviewsByUser(userId);
  return reviews;
};

// Obtener una reseña por su id
const getReviewById = async (id: number): Promise<Review | null> => {
  const review = await ReviewsModel.getReviewById(id);
  return review;
};

// Actualizar una reseña
const updateReview = async (
  id: number, 
  rating: number, 
  review_text: string
): Promise<Review | null> => {
  const updatedReview = await ReviewsModel.updateReview(id, rating, review_text);
  return updatedReview;
};

// Eliminar una reseña
const deleteReview = async (id: number): Promise<Review | null> => {
  const deletedReview = await ReviewsModel.deleteReview(id);
  return deletedReview;
};

export const ReviewsService = {
  createReview,
  getReviewsByMovie,
  getReviewsByUser,
  getReviewById,
  updateReview,
  deleteReview,
};