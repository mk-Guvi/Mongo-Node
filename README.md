# Mongo-Node
Created with Vscode for React Rest Api

1.)create a node server under inde.js file 

2.)yarn add mongoose

3.)create a config folder under src and create db.js file under it.

3.)In db.js,create the db connection using DB URi .

4.)create models folder under src and create authors.js,posts.js files init.

5.)create the schema for author and posts.

6.)yarn add faker(used to add dummy data)

7.)create seeds folder under src and create seedPosts.js file init

8.)In seedposts.js,create the seedposts function (adding 3 posts for each author) and clear post functions(clear posts and authors)

9.)create Routers folder and created authorRouter.js and PostsRouter.js files init

10.)create the server using express and delete the node server.

11.)create get method in postRouter.js and import it in the index.js as app.use()


12.)In postRouter.js,import the author and posts models and then create a get method that responds the json format of  fetched posts data along the author name using async and await from the database .(check @ "http://localhost:8080/Posts" to see the output)