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

13.)yarn add body-parser

14.)use body-parser as middleware in index.js

15.)create post method in postrouter.js to post the data in posts of individual author.

16.)in authorRouter.js,create the get and post method for authors and import it in index.js with app.use()

17.)In postrouter.js ,create a get method for getting individual post using post ID(http://localhost:8080/Posts/5f97cc2f550a972a14ac7932)

18.)create Admin.js file under models and create admin schema for it .

19.)create seedAdmin.js file under seeds folder

20.)yarn add bcrypt

21.) create services folder under src and create hash.js file init.

22.)In hash.js file create generatehash function and import it in seedAdmin.js file

23.)In seedAdmin.js file, using the generatehash function create the seedAdmin function  that saves the passsword in the Db as hashed format and finally call seedAdmin() to verify and run $ node ./src/seeds/seedAdmin.js.

24.)create clearAdmin function in seedadmin.js to remove the admin.

NOTE:

Rest Api's are api end points for retreiving and working with diferent resources from the serverside.

Anytime you call the given resource it will get the output immediately.

Api is stateless that is it doesnt deponds on anyother rest API

To retrive the data ,we are creating api endpoints in express(eg:app.use("/posts",PostRouter) where "/posts" is the api endpoint that is whenever the link is ends with "/posts" it rediects to postrouter(a midleware) file and does the getand post methods based on the url requests.)

25.)create adminRouter.js file under Routers and create a Post method for login APi init.(NOTE: create comparehash and import init).After creating the AdminRouter import it in the index.js file.


26.) yarn add jsonwebtoken

27.)create adminTokenManager.js file under services folder to create the jwt token(adminTokenGenerator) and import it in the adminRouter.js.


28.)create the comparehash funtion  in hash.js and import it in AdminRouter.js file.

29.)import adminTokenGenerator in adminRouer.js (to get the jwt token) from adminTokenmanager.js file and then create the jwtToken for email.

30.)yarn add cookie-parser(to store the jwtToken safely  in cookies) and import it in ineds.js file as a middleware.

31.)In adminRouter,add cookie for jwtToken after admin logins.
