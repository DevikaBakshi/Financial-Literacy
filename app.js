import express from "express";

const app = express();
const port = 3000;

app.set('views', './');

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("./src/views/pages/home");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
