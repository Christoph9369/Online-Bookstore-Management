require("dotenv").config();

const express = require("express");
const PORT = require("./config/confiig");

//express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//get
app.get("/", (req, res) => {
  res.json({ mssg: "welcome to the app" });
});
// listen for request
app.listen(PORT, () => {
  console.log(`listening on port on port ${PORT}`);
});
