import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let firstName = "";
let lastName = "";

app.get("/", (req, res) => {
  res.render("index.ejs");
});


app.post("/submit", (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const nameLength = firstName.length + lastName.length;

  res.render("index.ejs", {numberOfLetters : nameLength});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
