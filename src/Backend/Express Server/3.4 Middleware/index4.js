import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = new express();
const port = 3000;

app.use(morgan("dev"));

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

var bandName = "";

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + " " + req.body["pet"];
  bandName += " Band 🎸"; // Add the word 'Band'
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band name is ${bandName} `);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
