require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT, dbConnect } = require("./config/config");

const booksRoutes = require("./routes/booksRoutes");

//express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/books", booksRoutes);

//connect to mongodb
mongoose
  .connect(dbConnect)
  .then(() => {
    console.log("App connected to database");
    // listen for request
    app.listen(PORT, () => {
      console.log(`listening on port on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
