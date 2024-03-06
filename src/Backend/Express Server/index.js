import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   console.log(req.rawHeaders);
  res.send("<h1>Hello, Rabbit - Your Naveen : )</h1>");
});

app.post("/register", (req, res) => {
  const name = req.name;
  const email = req.email;

//   res.send(name + " " + email);

  res.sendStatus(201);
});

app.put("/user/rabbit", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/rabbit", (req, res) => {
    res.sendStatus(200);
});

app.dele("/user/rabbit", (req, res) => {
    res.sendStatus(200);
});


app.get("/about", (req, res) => {
  res.send("<h1>M Naveen Reddy </h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>+91 807 49 156 49 </h1>");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
