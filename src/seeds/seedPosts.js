require("../config/db");
const Author = require("../models/author");
const Post = require("../models/Posts");
const faker = require("faker");
const Posts = require("../models/Posts");

//this function creates posts with dummy data
const seedPosts = () => {
  const authors = ["Mk1", "MK2", "Arun"];
  authors.forEach(name => {
    new Author({
      name
    })
      .save()//this saves the name of the author
      .then(result => {
        console.log(result);
        const { _id } = result;//after saving the names we get the id of the author .based on the id we can create the posts.
        for (let i = 0; i < 3; i++) {
          new Post({
            title: faker.lorem.word(),
            content: faker.lorem.paragraphs(),
            author: _id
          })
            .save()//it saves the 3 posts for individual author
            .then(console.log)
            .catch(console.error);
        }
      })
      .catch(console.error);//if fails to get id of the author this error wil be displayed
  });
};

seedPosts()


//it clears the posts

//Note:Mongoose does not have inbuilt sync funtionality like  sequalize .we cannot do force sync instead we have to manually run clear command to clear the existing data.


const clearposts=()=>{
    Author.remove({})
    .then(console.log)
    .catch(console.error)
    Post.remove({})
    .then(console.log)
    .catch(console.error)


}

//clearposts()