const express = require('express');
const app = express();

app.get('/', function(req, res){// '/' is creating the route 
    res.send("Hello Top!");
})

app.get('/profile', function(req, res){// '/profile' is creating the route 
    res.send("Hello Visit!");
})

//put the route used by the message we expect in the url after the localhost:3000/

app.listen(3000);
//29:00 of part-4
