require("../config/db");
require("../models/author");
const Book = require("../models/book");

const saveBook = () => {
  const newBook = new Book({
    title: "the world",
    author: "602234a85c50d70944c22b4c",
    summary: "something the world is fishy...",
    isbn: "955-2545462"
  });
  newBook.save().then(console.log).catch(console.error);
};

//saveBook();
const findAllBook = () => {
  Book.find()
    .populate("author", "first_name last_name") //it will return all the fields of authors
    .then(console.log)
    .catch(console.error);
};
findAllBook();
