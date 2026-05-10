const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//we can use ejs for server side rendering (SSR)
app.set("view engine","ejs")

//below 2 lines of code will make forms work
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//staticFiles will also work
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());





// ROUTES
app.get('/', (req, res)=>{
    res.render('index');
})

app.post('/create', async (req, res)=>{
    let {username, email, password, age} = req.body;

    bcrypt.genSalt(10,(err,salt)=>{

        if(err){
            return res.send(err.message);
        }

        bcrypt.hash(password, salt, async (err, hash)=>{

            if(err){
                return res.send(err.message);
            }

            //below user will be created and instead of making user to log backin we will auto login him in it using jwt.sign
            let createdUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            });

            let token = jwt.sign({email},"secretKey");
            res.cookie("token",token);
        
            res.send(createdUser);
        })
    })
});


// To make User Login
app.get("/login",(req, res)=>{
    res.render("login");
})

app.post('/login', async (req, res)=>{

    let user = await userModel.findOne({email : req.body.email});

    if(!user) return res.send("Something went wrong");

    bcrypt.compare(req.body.password, user.password,(err,result)=>{

        if(err){
            return res.send(err.message);
        }

        if(!result){
            res.send("Something went wrong");
            
        }else{

            let token = jwt.sign({email:user.email},"secretKey");

            res.cookie("token",token);

            res.send("yes you can login");
        }

    })
})

// To make User Logout
app.get('/logout', (req, res)=>{
    res.cookie("token","");// thiw will make the cookie value to blank and automatically he/ she will get logout
    res.redirect("/");
})











// LISTENING PORT
app.listen(3000,()=>{
    console.log("http://localhost:3000");
});