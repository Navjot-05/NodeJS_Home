const express = require('express');
const app = express();
//below two lines of code are to make the unreadable messy data to readable data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(3000);