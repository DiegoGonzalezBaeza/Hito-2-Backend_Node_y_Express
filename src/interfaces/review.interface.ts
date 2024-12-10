export interface Review {
    id: number;             // Identificador único de la reseña
    user_id: string;        // UUID del usuario que realizó la reseña
    movie_id: number;       // ID de la película asociada
    rating: number;         // Puntuación de la película (1-5)
    review_text: string;    // Comentario de la reseña
    created_at?: string;     // Fecha de creación de la reseña
    updated_at?: string;     // Fecha de actualización de la reseña
  }