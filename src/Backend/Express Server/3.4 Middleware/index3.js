import express from "express";

const app = express();
const port = 3000;

// function logger(req, res, next){
//   console.log("Request MEthod : ", req.method);
//   console.log("Request URL : ", req.url);
//   next();
// }

// app.use(logger);

function logger(req, res, next) {
  console.log("Request Method : ", req.method);
  console.log("Request URL : ", req.url);
  const timeStamp = new Date().toISOString();
  console.log(`Time Stamp:${timeStamp}`);
  console.log("Status : ", res.statusCode);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
