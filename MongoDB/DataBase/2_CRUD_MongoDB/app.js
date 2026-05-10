const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("Hello Dev!");
})


app.get('/create', async (req, res)  => {//Create
    let createdUser = await userModel.create({
        name: "Harsh Vandana Sharma",
        email: "harsh@gmail.com",
        username:"harsh",
    })//this code is asynchronous code so runs after the synchronous but by using await and async function it will work as synchronous function i meant by this is this code will run first and then the below code will ran
    res.send(createdUser);
})

app.get('/read', async (req, res)  => {//Read
    let users = await userModel.find(); //to read all of the existing users
    // let users = await userModel.find({username: "harsh"}); //to read the users using filter 
    res.send(users);
})

app.get('/update', async (req, res)  => {//Update
    let updateduser = await userModel.findOneAndUpdate({username:"Kaptaanx5"}, {name: "NavjotSingh"}, {returnDocument:'after'})
    res.send(updateduser)
})

app.get('/delete', async (req, res)  => {//Delete
    let deleteduser = await userModel.findOneAndDelete({name:"NavjotSingh"},);
    res.send(deleteduser);
})




app.listen(3000,()=>{
    console.log("http://localhost:3000/");
});







