const checkTitle = (req, res, next) => {
  if (typeof req.body.title === "string") {
    console.log("Title passed");
    next();
  } else {
    res.status(400).json({ error: "Title is required" });
  }
};

const checkDirector = (req, res, next) => {
  if (typeof req.body.director === "string" || req.body.director === undefined) {
    console.log("Director passed");
    next();
  } else {
    res.status(400).json({ error: "Director should be a string" });
  }
};

const checkDate = (req, res, next) => {
  if (
    typeof req.body.release_date === "string") {
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (dateFormatRegex.test(req.body.release_date)) {
      console.log("Date passed");
      next();
    } else {
      res
        .status(400)
        .json({ error: "Invalid date format. Please enter date as YY-MM-DD" });
    }
  } else {
    res.status(400).json({ error: "Date is required" });
  }
};

const checkGenre = (req, res, next) => {
  if (typeof req.body.genre === "string" || req.body.genre === undefined) {
    console.log("Genre passed");
    next();
  } else {
    res.status(400).json({ error: "Genre should be a string." });
  }
};

const checkDuration = (req, res, next) => {
  if (
    typeof req.body.duration === "number" ||
    req.body.duration === undefined
  ) {
    console.log("Duration passed");
    next();
  } else {
    res.status(400).json({ error: "Duration should be a number." });
  }
};

const checkRating = (req, res, next) => {
  const rawRating = req.body.rating;

  if (typeof rawRating === "string") {
    const formattedRating = parseFloat(rawRating);

    if (
      !isNaN(formattedRating) &&
      formattedRating >= 0.0 &&
      formattedRating <= 10.0
    ) {
      req.body.rating = formattedRating;
      console.log("Rating passed");
      next();
    } else {
      res
        .status(400)
        .json({
          error: "Invalid rating. Please enter a rating between 0.0 and 10.0",
        });
    }
  } else {
    res.status(400).json({ error: "Rating is required" });
  }
};

const checkBoolean = (req, res, next) => {
  if (req.body.has_emmy === true || req.body.has_emmy === false) {
    console.log("Boolean passed");
    next();
  } else {
    res.status(400).json({ error: "has_emmy is required" });
  }
};

module.exports = {
  checkTitle,
  checkDirector,
  checkDate,
  checkGenre,
  checkDuration,
  checkRating,
  checkBoolean,
};
