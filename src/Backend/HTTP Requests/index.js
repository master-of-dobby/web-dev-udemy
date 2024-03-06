import express from "express";
const app = express();
const port = 3000;
// app.get("/", (req, res) => {
//   // Send "Hello, World!" with a link to "/about"
//   res.send(`
//       <h1>Hello, World!</h1>
//       <p>Click <a href="/about">here</a> to go to About page.</p>
//       <script>
//         setTimeout(() => { window.location.href = "/about"; }, 5000); // Redirect after 5 seconds
//       </script>
//     `);
// });

app.get("/", (req, res) => {
  res.send(200, "this is get method");
});

app.post("/register", (req, res) => {
  console.log(res.name);
  res.sendStatus(200);
});

app.delete("/user/remove", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/dolphin", (req, res) => {
  // res.statusCode(204);
  res.send("Dolphin has been  updated!");
});

app.get("/about", (req, res) => {
  // Respond with "I am Naveen"
  res.send("<h1>I am Naveen</h1>");
});
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
