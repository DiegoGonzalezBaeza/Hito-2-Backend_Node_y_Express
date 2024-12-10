import { pool } from "../config/database";
import { Review } from "../interfaces/review.interface";

// Crear una nueva reseña
const createReview = async (userId: string, movieId: number, rating: number, reviewText: string): Promise<Review> => {
  const query = {
    text: `INSERT INTO reviews (user_id, movie_id, rating, review_text)
           VALUES ($1, $2, $3, $4)
           RETURNING *`,
    values: [userId, movieId, rating, reviewText],
  };

  const { rows } = await pool.query(query);
  return rows[0] as Review;
};

// Obtener todas las reseñas para una película
const getReviewsByMovie = async (movieId: number): Promise<Review[]> => {
  const query = {
    text: "SELECT * FROM reviews WHERE movie_id = $1",
    values: [movieId],
  };

  const { rows } = await pool.query(query);
  return rows as Review[];
};

// Obtener todas las reseñas de un usuario
const getReviewsByUser = async (userId: string): Promise<Review[]> => {
  const query = {
    text: "SELECT * FROM reviews WHERE user_id = $1",
    values: [userId],
  };

  const { rows } = await pool.query(query);
  return rows as Review[];
};

// Obtener una reseña por su id
const getReviewById = async (id: number): Promise<Review | null> => {
  const query = {
    text: "SELECT * FROM reviews WHERE id = $1",
    values: [id],
  };

  const { rows } = await pool.query(query);
  return rows[0] ? (rows[0] as Review) : null;
};

// Actualizar una reseña
const updateReview = async (id: number, rating: number, reviewText: string): Promise<Review | null> => {
  const query = {
    text: "UPDATE reviews SET rating = $1, review_text = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *",
    values: [rating, reviewText, id],
  };

  const { rows } = await pool.query(query);
  return rows[0] ? (rows[0] as Review) : null;
};

// Eliminar una reseña
const deleteReview = async (id: number): Promise<Review | null> => {
  const query = {
    text: "DELETE FROM reviews WHERE id = $1 RETURNING *",
    values: [id],
  };

  const { rows } = await pool.query(query);
  return rows[0] ? (rows[0] as Review) : null;
};

export const ReviewsModel = {
  createReview,
  getReviewsByMovie,
  getReviewsByUser,
  getReviewById,
  updateReview,
  deleteReview,
};