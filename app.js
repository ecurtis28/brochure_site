const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
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
app.get("/orders", function (req, res) {
  res.sendFile(__dirname + "/public/orders.html");
});

app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/public/contact.html");
});
app.get("/reservations_success", function (req, res) {
  res.sendFile(__dirname + "/public/reservations_success.html");
});
app.get("/orders_success", function (req, res) {
  res.sendFile(__dirname + "/public/orders_success.html");
});

app.post("/orders", function (req, res) {
  res.redirect("/orders_success");
});

app.post("/reservations", function (req, res) {
  res.redirect("/reservations_success");
});
app.listen(port , function () {
 if(port === 3000) {console.log("Server started on port 3000")}
 else {
   console.log("Port is successfully remotely hosted")
 }

});
