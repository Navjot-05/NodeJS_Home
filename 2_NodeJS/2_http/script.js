const http = require('http');

const server = http.createServer(function(res, req){
    req.end("Hello world Using http");
})
server.listen(3000);