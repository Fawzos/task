const express = require("express");
const students = require("./api/students");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/students", students);

app.get("/health-check", (req, res) => {
  res.json({ succss: true }).status(200);
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
