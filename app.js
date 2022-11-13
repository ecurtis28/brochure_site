const { response } = require("express");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/menu", function (req, res) {
  res.sendFile(__dirname + "/public/menu.html");
});

app.get("/reservations", function (req, res) {
  res.sendFile(__dirname + "/public/reservations.html");
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
