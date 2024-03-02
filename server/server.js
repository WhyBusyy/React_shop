const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.use(express.jsom());
app.use(cors());

app.use(express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.get("/producr", (req, res) => {
  res.json({ name: "black shoes" });
});
