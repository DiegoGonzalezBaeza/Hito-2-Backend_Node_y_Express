import {pool } from "../config/database";
import {Genre} from "../interfaces/genre.interface"


const createGenre = async(
    name: string) => {

    const query = {
        text: `
        INSERT INTO genres (name)
        VALUES ($1)
        RETURNING *
        `,
        values: [name],
    };

    const { rows } = await pool.query(query);

    // console.log(rows);
    return rows[0] as Genre;

};

const findAllGenres = async () => {
    const query = {
      text: "SELECT * FROM genres",
    };
  
    const { rows } = await pool.query(query);
    return rows as Genre[];
  };
  
const findGenreById = async (id: number) => {
    const query = {
      text: "SELECT * FROM genres WHERE id = $1",
      values: [id],
    };
  
    const { rows } = await pool.query(query);
    return rows[0] as Genre;
};

const findOneGenreByTitle = async (name:string) => {

    const query = {
        text: `
        SELECT * FROM genres
        WHERE name = $1
        `,
        values: [name],
    };

    const { rows } = await pool.query(query);

    // console.log(rows);
    return rows[0] as Genre;

};
  
const updateGenre = async(
    id: number,
    name: string) => {
    const query = {
      text: "UPDATE genres SET name = $1 WHERE id = $2 RETURNING *",
      values: [name, id],
    };
  
    const { rows } = await pool.query(query);
    return rows[0] as Genre;
};
  
const removeGenre = async (id: number) => {
    const query = {
      text: "DELETE FROM genres WHERE id = $1 RETURNING *",
      values: [id],
    };
  
    const { rows } = await pool.query(query);
    return rows[0] as Genre;
};

export const GenreModel = {
    createGenre,
    findAllGenres,
    findGenreById,
    updateGenre,
    removeGenre,
    findOneGenreByTitle,
};