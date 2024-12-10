import { pool } from "../config/database";
import { MovieGenre } from "../interfaces/movie_genre.interface";

const addGenreToMovie = async (movieId: number, genreId: number): Promise<MovieGenre | null> => {
 
    const query = {
      text: `
        INSERT INTO movies_genres (movie_id, genre_id)
        VALUES ($1, $2)
        RETURNING *
      `,
      values: [movieId, genreId],
    };

    const { rows } = await pool.query(query);
    return rows[0] as MovieGenre;

};

const findGenresByMovieId = async (movieId: number): Promise<MovieGenre[]> => {
 
    const query = {
      text: `
        SELECT genres.id, genres.name
        FROM movies_genres
        INNER JOIN genres ON movies_genres.genre_id = genres.id
        WHERE movies_genres.movie_id = $1
      `,
      values: [movieId],
    };

    const { rows } = await pool.query(query);
    return rows;

};

const removeGenreFromMovie = async (movieId: number, genreId: number): Promise<MovieGenre | null> => {

    const query = {
      text: `
        DELETE FROM movies_genres
        WHERE movie_id = $1 AND genre_id = $2
        RETURNING *
      `,
      values: [movieId, genreId],
    };
    const { rows } = await pool.query(query);
    return rows[0] as MovieGenre;

};

const removeAllGenresFromMovie = async (movieId: number): Promise<number> => {

    const query = {
      text: `
        DELETE FROM movies_genres
        WHERE movie_id = $1
      `,
      values: [movieId],
    };

    const { rowCount } = await pool.query(query);
    return rowCount || 0;

};

export const MoviesGenresModel = {
  addGenreToMovie,
  findGenresByMovieId,
  removeGenreFromMovie,
  removeAllGenresFromMovie,
};