import {pool } from "../config/database";
import {Movie} from "../interfaces/movie.interface"

const findOneByTitle = async (title:string) => {

    const query = {
        text: `
        SELECT * FROM movies
        WHERE title = $1
        `,
        values: [title],
    };

    const { rows } = await pool.query(query);

    // console.log(rows);
    return rows[0] as Movie;

};

const createMovie = async(
    title: string, 
    release_year: number, 
    director?: string, 
    duration_minutes?: number,
    synopsis?: string,
    poster_url?: string) => {

    const query = {
        text: `
        INSERT INTO movies (title, release_year, director, duration_minutes, synopsis, poster_url)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `,
        values: [title, release_year, director, duration_minutes, synopsis, poster_url],
    };

    const { rows } = await pool.query(query);

    // console.log(rows);
    return rows[0] as Movie;

};

const findAllMovies = async () => {
    const query = {
      text: "SELECT * FROM movies",
    };
  
    const { rows } = await pool.query(query);
    return rows as Movie[];
  };
  
const findMovieById = async (id: string) => {
    const query = {
      text: "SELECT * FROM movies WHERE id = $1",
      values: [id],
    };
  
    const { rows } = await pool.query(query);
    return rows[0] as Movie;
};
  
const updateMovie = async(
    id: string,
    title: string, 
    release_year: number, 
    director?: string, 
    duration_minutes?: number,
    synopsis?: string,
    poster_url?: string) => {
    const query = {
      text: "UPDATE movies SET title = $1, release_year = $2, director = $3, duration_minutes = $4 , synopsis =$5, poster_url = $6 WHERE id = $7 RETURNING *",
      values: [title, release_year, director, duration_minutes, synopsis, poster_url, id],
    };
  
    const { rows } = await pool.query(query);
    return rows[0] as Movie;
};
  
const removeMovie = async (id: string) => {
    const query = {
      text: "DELETE FROM movies WHERE id = $1 RETURNING *",
      values: [id],
    };
  
    const { rows } = await pool.query(query);
    return rows[0] as Movie;
};

export const MovieModel = {
    createMovie,
    findOneByTitle,
    findAllMovies,
    findMovieById,
    updateMovie,
    removeMovie,
};