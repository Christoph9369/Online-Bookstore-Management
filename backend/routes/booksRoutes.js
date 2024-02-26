const express = require("express");

const Book = require("../models/bookModel");

const router = express.Router();

//GET all books
router.get("/", (req, res) => {
  res.json({ message: "get all books" });
});

//GET a single book
router.get("/:id", (req, res) => {
  res.json({ message: "get a single book" });
});

//POST a new book
router.post("/", async (req, res) => {
  const { title, author, genre, price, availability } = req.body;
  try {
    const book = await Book.create({
      title,
      author,
      genre,
      price,
      availability,
    });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//DELETE a book
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a book" });
});
//UPDATE
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a book" });
});

module.exports = router;
