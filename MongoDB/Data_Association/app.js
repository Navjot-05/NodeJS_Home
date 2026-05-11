const express = require('express');
const app = express();
const postModel  =require('./models/post');
const userModel  =require('./models/user');
const user = require('./models/user');

app.get('/', (req, res)=>{
    res.send("Hey");
})

app.get('/create', async (req, res)=>{
    let user = await userModel.create({
        username:"Navjot Singh",
        email:"navjot@gmail.com",
        age:25,
    });
    res.send(user);
});




app.get('/post/create', async (req, res)=>{
    let post = await postModel.create({
        postdata:"hello saare kaise ho",
        user:"6a013718049fbf2bad3fd4fa",
    });
    let user = await userModel.findOne({_id:"6a013718049fbf2bad3fd4fa"});
    user.posts.push(post._id);
    user.save();
    res.send({post, user});
});



app.listen(3000,()=>{
    console.log("http://localhost:3000");
});