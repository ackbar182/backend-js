const http = require('http');
const server = http.createServer();




server.on('request',(req,res) => {
    if (req.method === 'GET' && req.url === "/echo") {
        let body = [];
        req.on('data',chunk => {
            body.push(chunk);
        })
        .on('end',()=> {
            res.writeHead(200,{'Content-Type' : 'text/plain'})
            body = Buffer.concat(body).toString();
            res.end(body);
        })
      
        
    } else {
        res.writeHead(400,{'Content-Type' : 'text/plain'})
        res.end(`404 error \n`);
    }
});

server.listen(9600);

console.log(`Server listen in http://localhost:9500}`);