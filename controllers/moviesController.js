const express = require("express");
const {
  getAllMovies,
  getOneMovie,
  createMovie,
  deleteMovie,
  updateMovie,
} = require("../queries/movies");
const movies = express.Router();

movies.get("/", async (req, res) => {
  const allMovies = await getAllMovies();

  if (allMovies[0]) {
    res.status(200).json(allMovies);
  } else {
    res.status(500).json({ error: "Did not retrieve movie list!" });
  }
});

movies.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovie = await getOneMovie(id);

    if (oneMovie.id) {
      res.status(200).json(oneMovie);
    } else {
      res.status(404).json({ error: "No movie at that id!" });
    }
  } catch (error) {
    res.status(400).json({ error: "Single movie was not retrieved!" });
  }
});

movies.post("/", async (req, res) => {
  try {
    const createdMovie = await createMovie(req.body);
    res.status(201).json(createdMovie);
  } catch (error) {
    res.status(400).json({ error: "Movies was not created!" });
  }
});

movies.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovie = await deleteMovie(id);

    if (deletedMovie.id) {
      res.status(200).json(deletedMovie);
    } else {
      res.status(404).json({ error: "No movie at that id!" });
    }
  } catch (error) {
    res.status(400).json({ error: "Movie was not deleted!" });
  }
});

movies.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMovie = await updateMovie(id, req.body);

    if (updatedMovie.id) {
      res.status(200).json(updatedMovie);
    } else {
      res.status(404).json({ error: "No movie at that id!" });
    }
  } catch (error) {
    res.status(400).json({ error: "Movie was not updated!" });
  }
});

module.exports = movies;
