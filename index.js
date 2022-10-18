const express = require("express"),
  morgan = require("morgan");

const app = express();

app.enable("strict routing");

app.use(morgan("common"));

app.use(express.static("public"));

let topMovies = [
  {
    title: "Shrek",
    imdb: "7.9",
  },
  {
    title: "Shrek 2",
    imdb: "7.3",
  },
  {
    title: "Monsters, Inc.",
    imdb: "8.1",
  },
  {
    title: "How to Train Your Dragon",
    imdb: "8.1",
  },
  {
    title: "The Road to El Dorado",
    imdb: "6.9",
  },
  {
    title: "The Incredibles",
    imdb: "8",
  },
  {
    title: "Frozen",
    imdb: "7.4",
  },
  {
    title: "Finding Nemo",
    imdb: "8.2",
  },
  {
    title: "Mulan",
    imdb: "7.6",
  },
  {
    title: "Lilo & Stitch",
    imdb: "7.3",
  },
];

// app.get("/documentation", (req, res) => {
//   res.json(topMovies);
// });

app.get("/", (req, res) => {
  res.send("Welcome to the Movie club!");
});

app.get("/movies", (req, res) => {
  res.json(topMovies);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
  console.log("http://localhost:8080");
});
