// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended:true }));

// app.use(express.static(path.join(__dirname,'public')));//for every request find this path for the files needed for staticfiles

// app.set('view engine','ejs');//to set ejs as a view engine (we can render EJS pages using this line)



// app.get('/',(req, res)=>{
//     // res.send("It's Working MATE!");
//     res.render("index");
// });


// app.listen(3000,()=>{
//     console.log("Running");
// });


//above is for other knowledge below is the dynamic routing knowledge



const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(express.static(path.join(__dirname,'public')));//for every request find this path for the files needed for staticfiles

app.set('view engine','ejs');//to set ejs as a view engine (we can render EJS pages using this line)



// app.get('/profile/:username',(req, res)=>{//by using colon before the thing that is going to be dynamic 
//     req.params.username //for operating on username
//     // res.send("It's Working MATE!");
//     res.send(req.params.username);
//     res.render("index");
// });


//creating route for Author/Username/UserAge
app.get('/profile/:username/:age',(req, res)=>{
    res.send(`Welcome ${req.params.username} of age ${req.params.age}`);
    res.render("index");
});


app.listen(3000,()=>{
    console.log("Running");
});