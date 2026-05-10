// const express = require('express');
// const app = express();
// const cookieParser = require('cookie-parser');//for reading cookies

// app.use(cookieParser());


// app.get('/', (req, res)=>{
    //     res.cookie("name","navjot");
    //     // res.cookie(nameOfCookie, dataToBeSet); this is the basic syntax
    //     res.send("done");
    // })
    
    // app.get('/create',(req, res)=>{
        //     console.log(req.cookies)
        //     res.send("read page");
        // })
        
        
        // app.listen(3000,()=>{
        //         console.log("http://localhost:3000");
        //     })







//Bcrypt
// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');

// app.get('/',(req, res)=>{
//     //below code is for encrypting the password
//     // res.send('Bcrypt for encryption');
//     // bcrypt.genSalt(10, (err, salt)=>{
//     //     bcrypt.hash("navi@335027", salt, (err, hash)=>{
//     //         console.log(hash);
//     //     })
//     // })


//     // res.send("Bcrypt decryption");
//     // const hash = '$2b$10$YJCkk7GyeR0Sb0SmOiHU8ejyQ4OyaCfa61ZFtMYu4UDDdubPrLO82';
//     // const pw = 'navi@335027';
//     // bcrypt.compare(pw, hash, (err, result)=>{
//     //     console.log(result);
//     // })
// })


// app.listen(3000,()=>{
//                 console.log("http://localhost:3000");
//             })











// JWT
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(cookieParser());
app.get('/',function(req, res){
    let token = jwt.sign({email:"navjot@gmail.com"},"secret");//here we kept secret a secret but in future for security it mus be hidden cauz using this anyone can decrypt it
    //sending token (cookie to browser)
    res.cookie("token",token);
    res.send("DONE !!");
})

app.get("/read",(req, res)=>{
    let data = jwt.verify(req.cookies.token,"secret");
    console.log(data);
})

app.listen(3000);
