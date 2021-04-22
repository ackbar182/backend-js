const fs = require('fs');
const http = require('http');


const server = http.createServer();

server.on('request',(req,res) => {
    fs.readFile('./package',(err,data) => {

        if (err) {
            console.log('err',err);
        }

        res.end(data);
    })
});


server.listen(5900);


//consume mucha memoria tomando el archivo en plano por eso es mejor usar streams
