import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("dev")); // log requests to the console

app.get("/", (req, res) => {
  res.send("<h1>Helloooo</h1>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
