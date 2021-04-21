const http = require('http');
const server = http.createServer();




server.on('request',(req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');

    res.end(`Hello world \n`);
});

server.listen(9500);

console.log(`Server listen in http://localhost:9500}`);