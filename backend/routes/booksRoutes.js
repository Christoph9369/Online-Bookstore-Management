const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ message: "POST a new book" });
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