import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('views', path.join(__dirname, 'src/views'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.send("pages/home");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});