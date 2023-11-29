# Movie Server (Portfolio-Back)

This Movie Server provides endpoints for managing a collection of movies. It supports CRUD operations (Create, Read, Update, Delete) and includes validation for incoming data.

## Table of Contents

- [Usage](#usage)
- [Endpoints](#endpoints)
- [Validation](#validation)


## Usage
- The API exposes endpoints for managing movies. Make sure to validate input data based on the provided validation rules.

## Endpoints
- GET /movies: Get a list of all movies.
- GET /movies/:id: Get details for a specific movie.
- POST /movies: Create a new movie.
- DELETE /movies/:id: Delete a movie.
- PUT /movies/:id: Update a movie.

## Validation
The API includes middleware for validating movie data:

- checkTitle: Title must be a string.
- checkDirector: Director must be a string or undefined.
- checkDate: Release date must be a valid date in the format YYYY-MM-DD.
- checkGenre: Genre must be a string or undefined.
- checkDuration: Duration must be a number or undefined.
- checkRating: Rating must be a valid decimal between 0.0 and 10.0.
- checkBoolean: has_emmy must be a boolean.