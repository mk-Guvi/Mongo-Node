const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AuthorSchema = new Schema({
  //sql  has inbuilt constraint like we can  mark certain fields as required,but in mongodb cant because we can add any fields,so to overcome this mongoose do constraint check in server itself so that we can save the cleaned data
  first_name: {
    type: String, //its JS string constructor
    required: true
  },
  last_name: {
    type: String,              
    required: true
  },
  field_of_Study: {
    type: String,
    enum: ["Fiction", "non-Fiction"]
  },

  date_of_birth: Date,
  date_of_death: Date
});

//we should tell the mongoose that it is a part of collection
const Author = model("Author", AuthorSchema); //Author is name of the collection

module.exports = Author;
