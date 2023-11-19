const express = require("express");
const cors = require("cors");
const app = express();
const moviesController = require("./controllers/moviesController");
app.use(cors());
app.use(express.json());
app.use("/movies", moviesController);



app.get("/", (req, res) => {
  res.send("Welcome to the Movie Server!");
});

app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "page not found" } });
});
module.exports = app;