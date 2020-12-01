const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");

app.set("view engine", "hbs");

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/homepage", (req, res) => {
  res.render("homepage");
});

app.listen(4000, () => {
  console.log("server is ready ! http://localhost:4000");
});
