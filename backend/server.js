require("dotenv").config();

const express = require("express");
const PORT = require("./config/confiig");

const booksRoutes = require("./routes/booksRoutes");

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/books", booksRoutes);
// listen for request
app.listen(PORT, () => {
  console.log(`listening on port on port ${PORT}`);
});
