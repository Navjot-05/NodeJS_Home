// jb bhi server request accept karta hai wha se route ke beech pahuchne tak agar aap uss request ko beech me rokte ho and kuchh perform karte ho , to ye element middleware kehlata h 

const express = require('express');
const app = express();
// 1st method for using middleware
app.use((req, res, next)=>{
   console.log("middleware Ran");
   next();//this will send to the next request
});
app.use((req, res, next)=>{
   console.log("middleware Ran  +1");
   next();//this will send to the next request
});


app.get('/',(req, res)=>{//here the sequence of the req and res matters
    res.send("QWERTY keyboard type")
})




app.get('/about',(req, res, next)=>{//here the sequence of the req and res matters
    return next(new Error("Something went wrong (this is going to backend console)"));
})




//put error handlers at last 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something Broke ! (this will go to the frontend as response)');
})


app.listen(3000);