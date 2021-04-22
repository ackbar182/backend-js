const fs = require('fs');

const http = require('http');



const server = http.createServer();



server.on('request',(req,res) => {
    const src = fs.createReadStream('./package');


    src.pipe(res);
});



server.listen(5800);
console.log(`Servidor en el puerto 5900`);