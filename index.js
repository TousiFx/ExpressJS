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
app.get("/:username/:Id", (req, res) => {
  let { username, Id } = req.params;
  let Html = `<h1>Welcome to the page of @${username},${Id}</h1>`;
  res.send(Html);
});
app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send(`Nothing search`);
  }
  res.send(`this is a Query : ${q}`);
});
