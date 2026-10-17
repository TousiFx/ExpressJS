const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello  this is root path");
});
app.get("/apple", (req, res) => {
  res.send("you connect to the apple path");
});
app.get("/banana", (req, res) => {
  res.send("you connect to the banana path");
});

app.get("/*splat", (req, res) => {
  res.send("Page not found");
});
