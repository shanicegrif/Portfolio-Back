const db = require("../db/dbConfig");

const getAllMovies = async () => {
  try {
    const allMovies = await db.any("SELECT * FROM movies");
    return allMovies;
  } catch (error) {
    return error;
  }
};

const getOneMovie = async (id) => {
  try {
    const oneMovie = await db.one("SELECT * FROM movies WHERE id=$1", id);
    return oneMovie;
  } catch (error) {
    return error;
  }
};

const createMovie = async (movie) => {
  try {
    const { title, director, release_date, genre, duration, rating, has_emmy } =
      movie;
    const createdMovie = await db.one(
      "INSERT INTO movies (title, director, release_date, genre, duration, rating, has_emmy) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [title, director, release_date, genre, duration, rating, has_emmy]
    );
    return createdMovie;
  } catch (error) {
    return error;
  }
};

const deleteMovie = async (id) => {
  try {
    const deletedMovie = await db.one("DELETE FROM movies WHERE id=$1 RETURNING *", id);
    return deletedMovie;
  } catch (error) {
    return error;
  }
};

const updateMovie = async (id, movie) => {
  try {
    const { title, director, release_date, genre, duration, rating, has_emmy } =
      movie;
    const updatedMovie = await db.one("UPDATE movies SET title=$1, director=$2, release_date=$3, genre=$4, duration=$5, rating=$6, has_emmy=$7 WHERE id=$8 RETURNING *", [title, director, release_date, genre, duration, rating, has_emmy, id]);
    return updatedMovie;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie,
  deleteMovie,
  updateMovie,
};
