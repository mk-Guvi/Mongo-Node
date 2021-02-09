const Author = require("../models/author");
require("../config/db");

const saveAuthor = () => {
  const newAuthor = new Author({
    last_name: "musharaf",
    first_name: "mohammed",
    date_of_birth: new Date(1999, 5, 24),
    date_of_death: new Date(2070, 5, 24),
    field_of_Study: "non-Fiction"
  });

  newAuthor.save().then(console.log).catch(console.error());
};
//saveAuthor();
const findAllAuthors = () => {
  Author.find().then(console.log).catch(console.error());
};
//findAllAuthors()
const id = "602234a85c50d70944c22b4c";
const findById = () => {
  Author.findById(id).then(console.log).catch(console.error());
};
//findById();
const findByFirstName = () => {
  Author.find({ first_name: "mohammed" }) //its similar to mongodb query and it will display in an array as we find all the authors
    .then(console.log)
    .catch(console.error());
};
//findByFirstName();
const findOneByFirstName = () => {
  Author.findOne({ first_name: "mohammed" }) //its similar to mongodb query and it will only the first match
    .then(console.log)
    .catch(console.error());
};
//findOneByFirstName();

const findandUpdate = () => {
  const filter = {
    first_name: "mk"
  };
  const update = {
    field_of_Study: "Fiction"
  };
  Author.findOneAndUpdate(filter, update)
    .then(() => Author.findOne(filter))
    .then(console.log)
    .catch(console.error);
};

findandUpdate();
