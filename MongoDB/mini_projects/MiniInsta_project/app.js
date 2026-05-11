// // ===============================
// // IMPORTING REQUIRED PACKAGES
// // ===============================

// const express = require('express');

// const app = express();

// const userModel = require("./models/user");

// const postModel = require("./models/post");


// const cookieParser = require('cookie-parser');

// // Used for file upload
// // const multer = require('multer');

// // Used for file extension handling
// const path = require('path');

// // Used for generating random encrypted strings
// const crypto = require('crypto'); //this is for randomly encrypted 

// // Used for password hashing
// const bcrypt = require('bcrypt');

// // Used for token generation
// const jwt = require('jsonwebtoken');

// // const post = require('./models/post'); // removed unnecessary import



// // ===============================
// // EXPRESS BASIC SETTINGS
// // ===============================

// // Setting ejs as template/view engine
// app.set("view engine","ejs");

// // Allows server to accept JSON data
// app.use(express.json());

// // Allows server to read form data
// app.use(express.urlencoded({extended:true}));

// // Enables cookie reading
// app.use(cookieParser());




// // ===============================
// // MULTER STORAGE CONFIGURATION
// // ===============================

// // diskStorage means files will be stored inside computer folder
// // const storage = multer.diskStorage({

// //     // Destination folder where uploaded files will go
// //     destination: (req, file, cb)=>{

// //         // cb = callback function
// //         // first parameter = error
// //         // second parameter = destination path

// //         cb(null, './public/images/uploads');
// //     },



// //     // Renaming uploaded file
// //     filename: (req, file, cb)=>{

// //         // Creating 12 random bytes
// //         crypto.randomBytes(12, (err, bytes)=>{//this is the code of randomness
            
// //             // If random byte generation fails
// //             if(err){
// //                 return cb(err);
// //             }

// //             // Creating random filename
// //             // bytes.toString("hex") converts random bytes into readable string
// //             // path.extname gets original file extension like .png .jpg etc

// //             const fn = bytes.toString("hex") + path.extname(file.originalname);

// //             // Saving generated filename
// //             cb(null, fn);
// //         })
// //     }
// // // })



// // // Passing storage configuration into multer
// // // const upload = multer({storage: storage});




// // // ===============================
// // // ROUTES
// // // ===============================



// // // -------------------------------
// // // Home Route
// // // -------------------------------

// // // Rendering home page
// // app.get('/',(req, res)=>{

// //     // Renders index.ejs
// //     res.render("index");
// // })




// // // ===============================
// // // MULTER RELATED ROUTES
// // // ===============================


// // // Test page route
// // // app.get('/test',(req, res)=>{

// // //     // Renders test.ejs
// // //     res.render("test");
// // // })




// // // // Upload Route
// // // app.post('/upload', upload.single("image"), (req, res)=>{

// // //     // upload.single("image")
// // //     // "image" should match form input name

// // //     //here image is from the form of the test.ejs

// // //     // Shows uploaded file info in terminal
// // //     console.log(req.file);

// // //     // Sending response back to browser
// // //     res.send("File uploaded successfully");
// // // })




// // // ===============================
// // // PROFILE ROUTE
// // // ===============================


// // // Protected route using middleware
// // app.get("/profile", isLoggedIn, async (req, res)=>{

// //     // Finding logged in user using email from token
// //     let user = await userModel
// //     .findOne({email:req.user.email})
// //     .populate("posts");

// //     // populate("posts")
// //     // replaces post IDs with full post data

// //     // Sending user data to profile.ejs
// //     res.render("profile",{user});
// // })




// // // ===============================
// // // LIKE ROUTE
// // // ===============================


// // // for Like route
// // app.get("/like/:id", isLoggedIn, async (req, res)=>{

// //     // Finding post by id
// //     let post = await postModel
// //     .findOne({_id:req.params.id})
// //     .populate("user");



// //     // If user has not liked the post
// //     if(post.likes.indexOf(req.user.userid) === -1){

// //         // Add user id into likes array
// //         post.likes.push(req.user.userid);

// //     }else{

// //         // Remove like if already liked
// //         post.likes.splice(
// //             post.likes.indexOf(req.user.userid),
// //             1
// //         );
// //     }
    
// //     // Saving updated post
// //     await post.save();

// //     // Redirecting back
// //     res.redirect("/profile");
// // })










// // // ===============================
// // // EDIT POST ROUTE
// // // ===============================


// // app.get("/edit/:id", isLoggedIn, async (req, res)=>{

// //     // Finding post
// //     let post = await postModel
// //     .findOne({_id:req.params.id})
// //     .populate("user");

// //     // Rendering edit page
// //     res.render("edit",{post});
    
// // })




// // // ===============================
// // // UPDATE POST ROUTE
// // // ===============================


// // app.post("/update/:id", isLoggedIn, async (req, res)=>{

// //     // Updating post content
// //     await postModel.findOneAndUpdate(

// //         {_id:req.params.id},

// //         {content:req.body.content}
// //     );

// //     // Redirecting back
// //     res.redirect("/profile");
// // })




// // // ===============================
// // // LOGIN PAGE ROUTE
// // // ===============================


// // app.get('/login',

// //     // isLoggedIn,//method of using middleware for protected routes

// //      async (req, res)=>{

// //     // Rendering login page
// //     res.render("login");
// // })




// // // ===============================
// // // REGISTER ROUTE
// // // ===============================


// // // Routing
// // app.post('/register', async (req, res)=>{

// //     // Taking data from form
// //     let {email, password, username, name, age} = req.body;



// //     // Checking if user already exists
// //     let user = await userModel.findOne({email});



// //     // If user already exists
// //     if(user) return res.status(400).send("User Already registered");



// //     // Generating salt for hashing password
// //     bcrypt.genSalt(10,(err, salt)=>{

// //         if(err){
// //             return res.status(500).send("Error generating salt");
// //         }



// //         // Hashing password
// //         bcrypt.hash(password, salt, async (err, hash)=>{

// //             if(err){
// //                 return res.status(500).send("Error hashing password");
// //             }



// //             // Creating user in database
// //             let user = await userModel.create({

// //                 username,
// //                 email,
// //                 age,
// //                 name,

// //                 // Storing hashed password
// //                 password:hash,
// //             });



// //             // Creating JWT token
// //             let token = jwt.sign(

// //                 {email: email, userid:user._id},

// //                 "secretkey"
// //             );



// //             // Saving token in cookies
// //             res.cookie("token", token);



// //             // Sending response
// //             res.send("Created");
// //         })
// //     })
// // })






// // // ===============================
// // // LOGIN ROUTE
// // // ===============================


// // app.post('/login', async (req, res)=>{

// //     // Taking email and password from form
// //     let {email, password} = req.body;



// //     // Finding user by email
// //     let user = await userModel.findOne({email});



// //     // If user not found
// //     if(!user) return res.status(400).send("Something went wrong");



// //     // Comparing entered password with database password
// //     bcrypt.compare(password, user.password, (err, result)=>{

// //         if(err){
// //             return res.status(500).send("Error comparing password");
// //         }



// //         // If password matches
// //         if(result) {

// //             // Creating token
// //             let token = jwt.sign(

// //                 {email: email, userid:user._id},

// //                 "secretkey"
// //             );



// //             // Saving token in cookies
// //             res.cookie("token", token);



// //             // Redirecting to profile
// //             res.status(200).redirect("/profile");

// //         }

// //         // If password is incorrect
// //         else{

// //             res.redirect('/login');
// //         }
// //     })
// // })




// // // ===============================
// // // CREATE POST ROUTE
// // // ===============================


// // app.post("/post", isLoggedIn, async (req, res)=>{

// //     // Finding logged in user
// //     let user = await userModel.findOne({
// //         email:req.user.email
// //     });



// //     // Taking content from form
// //     let {content} = req.body;



// //     // Creating post
// //     let post = await postModel.create({

// //         user:user._id,

// //         content,
// //     });



// //     // Storing post id inside user
// //     user.posts.push(post._id);



// //     // Saving updated user
// //     await user.save();



// //     // Redirecting back
// //     res.redirect('/profile');
// // });




// // // ===============================
// // // LOGOUT ROUTE
// // // ===============================


// // app.get("/logout",(req,res)=>{

// //     // Removing token cookie
// //     res.cookie("token","");

// //     // Redirecting to login
// //     res.redirect('/login');
// // })




// // // ===============================
// // // AUTH MIDDLEWARE
// // // ===============================


// // // creating middleware for protected routes 
// // // for eg prevent user to get access to premium content

// // function isLoggedIn(req, res, next){

// //     // If token not found
// //     if(!req.cookies.token) {

// //         return res.redirect("/login");
// //     }



// //     try{

// //         // Verifying token
// //         let data = jwt.verify(
// //             req.cookies.token,
// //             "secretkey"
// //         );



// //         // Saving token data in request
// //         req.user = data;



// //         // Moving to next middleware/route
// //         next();

// //     }catch(err){

// //         // If token invalid
// //         return res.redirect("/login");
// //     }
// // }




// // ===============================
// // SERVER START
// // ===============================


// app.listen(3000,()=>{

//     console.log("http://localhost:3000");
// });






// // Below code is sheryians code and above is for best understanding


































































































 const express = require('express');
 const app = express();
 const userModel = require("./models/user");
 const postModel = require("./models/post");
 const cookieParser = require('cookie-parser');
 const upload = require('./utils/multerconfig');
 const path = require('path');
 const crypto = require('crypto'); //this is for randomly encrypted 

 const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');
 // const post = require('./models/post'); // removed unnecessary import
//  Setting express static files
app.use(express.static(path.join(__dirname,'public')));

 app.set("view engine","ejs");
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(cookieParser());




//  const storage = multer.diskStorage({
//      destination: (req, file, cb)=>{
//          cb(null, './public/images/uploads');
//      },
//      filename: (req, file, cb)=>{
//          crypto.randomBytes(12, (err, bytes)=>{//this is the code of randomness
            
//              if(err){
//                  return cb(err);
//              }

//              const fn = bytes.toString("hex") + path.extname(file.originalname);
//              cb(null, fn);
//          })
//      }
//  })

//  const upload = multer({storage: storage});


 // Rendering
 app.get('/',(req, res)=>{
     res.render("index");
 })

 // Multer related
//  app.get('/test',(req, res)=>{
//      res.render("test");
//  })

//  app.post('/upload', upload.single("image"), (req, res)=>{//here image is from the form of the test.ejs
//      console.log(req.file);

//      res.send("File uploaded successfully");
//  })


 app.get("/profile", isLoggedIn, async (req, res)=>{
     let user = await userModel.findOne({email:req.user.email}).populate("posts");

     res.render("profile",{user});
 })


 app.get('/profile/upload', (req,res)=>{
    res.render("test");
 })

 app.post('/upload',isLoggedIn, upload.single("image"), async (req, res)=>{
    let user = await userModel.findOne({email:req.user.email})
    user.profilepic = req.file.filename;
    await user.save();
    res.redirect('/profile');
 })

 // for Like route
 app.get("/like/:id", isLoggedIn, async (req, res)=>{
     let post = await postModel.findOne({_id:req.params.id}).populate("user");

     if(post.likes.indexOf(req.user.userid) === -1){
         post.likes.push(req.user.userid);
     }else{
         post.likes.splice(post.likes.indexOf(req.user.userid), 1);
     }
    
     await post.save();

     res.redirect("/profile");
 })










 app.get("/edit/:id", isLoggedIn, async (req, res)=>{
     let post = await postModel.findOne({_id:req.params.id}).populate("user");

     res.render("edit",{post});
    
 })


 app.post("/update/:id", isLoggedIn, async (req, res)=>{
     await postModel.findOneAndUpdate(
         {_id:req.params.id},
         {content:req.body.content}
     );

     res.redirect("/profile");
 })




 app.get('/login',
     // isLoggedIn,//method of using middleware for protected routes
      async (req, res)=>{
     res.render("login");
 })



 // Routing
 app.post('/register', async (req, res)=>{
     let {email, password, username, name, age} = req.body;

     let user = await userModel.findOne({email});

     if(user) return res.status(400).send("User Already registered");

     bcrypt.genSalt(10,(err, salt)=>{

         if(err){
             return res.status(500).send("Error generating salt");
         }

         bcrypt.hash(password, salt, async (err, hash)=>{

             if(err){
                 return res.status(500).send("Error hashing password");
             }

             let user = await userModel.create({
                 username,
                 email,
                 age,
                 name,
                 password:hash,
             });

             let token = jwt.sign(
                 {email: email, userid:user._id},
                 "secretkey"
             );

             res.cookie("token", token);

             res.send("Created");
         })
     })
 })






 app.post('/login', async (req, res)=>{
     let {email, password} = req.body;

     let user = await userModel.findOne({email});
     
     if(!user) return res.status(400).send("Something went wrong");

     bcrypt.compare(password, user.password, (err, result)=>{

         if(err){
             return res.status(500).send("Error comparing password");
         }

         if(result) {

             let token = jwt.sign(
                 {email: email, userid:user._id},
                 "secretkey"
             );

             res.cookie("token", token);

             res.status(200).redirect("/profile");

         }
         else{
             res.redirect('/login');
         }
     })
 })


 app.post("/post", isLoggedIn, async (req, res)=>{

     let user = await userModel.findOne({email:req.user.email});

     let {content} = req.body;

     let post = await postModel.create({
         user:user._id,
         content,
     });

     user.posts.push(post._id);
     await user.save();

     res.redirect('/profile');
 });


 app.get("/logout",(req,res)=>{
     res.cookie("token","");
     res.redirect('/login');
 })

 // creating middleware for protected routes for eg prevent user to get access to premium content



 function isLoggedIn(req, res, next){

     if(!req.cookies.token) {
         return res.redirect("/login");
     }

     try{

         let data = jwt.verify(req.cookies.token, "secretkey");

         req.user = data;

         next();

     }catch(err){

         return res.redirect("/login");
     }
 }


 app.listen(3000,()=>{
     console.log("http://localhost:3000");
 });







