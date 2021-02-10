const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  author: {
    //book is related to author and it is one to many relationship that is one author can have many books
    type: Schema.Types.ObjectId, //objectid  of the author
    ref: "Author", //refers to the schema name of author
    required: true
  }
});

const Book = model("Book", BookSchema);

module.exports = Book;
