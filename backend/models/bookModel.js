const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Assuming price cannot be negative
  },
  availability: {
    type: Boolean,
    default: true, // Assuming the book is available by default
  },
  Date: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
