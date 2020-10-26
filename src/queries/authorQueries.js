const { findOne } = require("../models/author")
const Author=require("../models/author")//importing the schema of the authors

require("../config/db")//to save it in the DB it is imported

//save query

const saveAuthor=()=>{
    const newAuthor= new Author({
        f_name:"Mk",
        l_name:"musharaf",
        d_o_b:new Date(1999,05,25),
        d_o_d:new Date(2050,05,27),
        field_of_study:"Fiction"
    })
    //It is a asynchronous operations
    
    newAuthor
    .save()
    .then(console.log)//this will print the above data
    .catch(console.error)
}


//saveAuthor()//to check save query uncomment it

const findAllAuthors=()=>{
    Author.find()
    .then(console.log)
    .catch(console.error)
}

//findAllAuthors()

//find by ID

const id="5f96445283aa9b12c41ecc53"

const findAuthorById=()=>{
    Author.findById(id)
    .then(console.log)
    .catch(console.error)
}

//findAuthorById()

//find by first name

const findByLastName=()=>{
    Author.find({l_name:"musharaf"})
    .then(console.log)
    .catch(console.error)
}

//findByLastName()

//findONE

const findByLastNameOne=()=>{
    Author.findOne({l_name:"musharaf"})
    .then(console.log)
    .catch(console.error)

}

//findByLastNameOne()

const findAndUpdateOne=()=>{
    
   const filter= {
        f_name:"Mk"
    }

   const update= {
        field_of_study:"Non-Fiction"
    }
    Author.findOneAndUpdate(filter,update)//this will display before update and then after update after calling it twice
    .then(()=>Author.findOne(filter))//this will call the updated one.
    .then(console.log)
    .catch(console.error)
}
findAndUpdateOne()